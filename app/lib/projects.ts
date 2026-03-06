import { existsSync, readFileSync } from 'fs'
import { Client } from 'get-pinned-repos'

export interface Project {
    name: string
    description: string
    source: string
    website: string
}

const DEFAULT_TOKEN_FILE = '/run/secrets/github_token'
const DEFAULT_USERNAME = 'olillin'

function getGitHubToken(): string | null {
    // Get token from environment variable
    const envToken = process.env.GITHUB_TOKEN
    if (envToken != null) return envToken

    // Get token from file
    const tokenFile = process.env.GITHUB_TOKEN_FILE ?? DEFAULT_TOKEN_FILE
    if (existsSync(tokenFile)) {
        return readFileSync(tokenFile, 'utf8').trim()
    }

    // No token set
    return null
}

function getGitHubUsername(): string {
    const envUsername = process.env.GITHUB_USERNAME
    return envUsername ? envUsername : DEFAULT_USERNAME
}

export async function getProjects(): Promise<Project[]> {
    const token = getGitHubToken()
    console.log(token)
    if (token == null) {
        console.warn(
            'Missing environment variable GITHUB_TOKEN, unable to get pinned projects'
        )
        return []
    }

    Client.setToken(token)
    const username = getGitHubUsername()
    const pinned = await Client.getPinnedRepos(username)

    const projects = pinned.map(repo => {
        return {
            name: repo.name,
            description: repo.description,
            source: repo.url,
            website: repo.homepageUrl,
        } satisfies Project
    })
    return projects
}
