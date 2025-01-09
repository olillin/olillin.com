import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import getTitleAtUrl from 'get-title-at-url'

export default async function Site(props) {
    const prettyLink = props.link ?? props.href.replace(/^https?:\/\//, '')

    let title: string
    if (props.title) {
        title = props.title
    } else {
        const siteTitle = await await getTitleAtUrl(props.href)
        title = siteTitle.title ?? prettyLink
    }

    return (
        <article>
            <h3>{title}</h3>
            <nav>
                <a href={props.href} target="_blank">
                    {prettyLink}
                </a>
                {props.source ? (
                    <a href={props.source} target="_blank">
                        <FontAwesomeIcon icon={faGithub} /> Source code
                    </a>
                ) : null}
            </nav>
        </article>
    )
}
