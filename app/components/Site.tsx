import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default async function Site({
    href,
    link,
    name,
    source,
}: {
    href: string
    link?: string
    name?: string
    source?: string
}) {
    const prettyLink = link ?? href.replace(/^https?:\/\//, '')
    let title = name ?? prettyLink

    return (
        <article>
            <h3>{title}</h3>
            <nav>
                <a href={href} target="_blank">
                    {prettyLink}
                </a>
                {source ? (
                    <a href={source} target="_blank">
                        <FontAwesomeIcon icon={faGithub} /> Source code
                    </a>
                ) : null}
            </nav>
        </article>
    )
}
