import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default async function Project(props) {
    return (
        <article>
            <h3>{props.name}</h3>
            <nav>
                {props.website ? (
                    <a href={props.website} target="_blank">
                        <FontAwesomeIcon icon={faGlobe} /> Website
                    </a>
                ) : null}
                <a href={props.source} target="_blank">
                    <FontAwesomeIcon icon={faGithub} /> Source code
                </a>
            </nav>
            <p>{props.description}</p>
        </article>
    )
}
