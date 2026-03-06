import { Client } from 'get-pinned-repos'

export interface Project {
    name: string
    description: string
    source: string
    website: string
}

export async function getProjects(): Promise<Project[]> {
    const token = process.env.GITHUB_ACCESS_TOKEN 
    if (!token) {
        console.warn('Missing environment variable GITHUB_ACCESS_TOKEN, unable to get pinned projects')
        return []
    }

    Client.setToken(token)
    const pinned = await Client.getPinnedRepos('olillin')

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
