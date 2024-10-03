import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import getTitleAtUrl from 'get-title-at-url'

export default async function Site(props) {
    return (
        <article>
            <h3>{getTitleAtUrl(props.href)}</h3>
            <nav>
                <a href={props.href} target="_blank">
                    {props.link ?? props.href.replace(/^https:\/\//, '')}
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
