import { getProjects } from '../lib/projects'
import Project from './Project'

export default async function Projects() {
    const projects = await getProjects()

    if (projects.length === 0) {
        return null
    }

    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="grid projectsGrid">
                {projects.map(project => (
                    <Project
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        website={project.website}
                        source={project.source}
                    />
                ))}
            </div>
        </section>
    )
}
