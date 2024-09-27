import React from 'react'
import { Client as GetPinnedReposClient } from 'get-pinned-repos'
import Project from './Project'

const { GITHUB_ACCESS_TOKEN } = process.env
if (!GITHUB_ACCESS_TOKEN) {
    throw new Error('Missing required ENV variable GITHUB_ACCESS_TOKEN')
}

export default async function Projects() {
    GetPinnedReposClient.setToken(GITHUB_ACCESS_TOKEN)

    const pinned = await GetPinnedReposClient.getPinnedRepos('olillin')
    const projects = pinned.map(repo => {
        return {
            name: repo.name,
            description: repo.description,
            source: repo.url,
            website: repo.homepageUrl,
        }
    })

    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="grid projectsGrid">
                {projects.map(project => (
                    <Project name={project.name} description={project.description} website={project.website} source={project.source} />
                ))}
            </div>
        </section>
    )
}
