import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default async function Project(props) {
    return (
        <article>
            <h2>{props.name}</h2>
            <nav>
                {props.website ? (
                    <a href=${props.website}>
                        <FontAwesomeIcon icon={faGlobe} /> Website
                    </a>
                ) : null}
                <a href={props.source}>
                    <FontAwesomeIcon icon={faGithub} /> Source code
                </a>
            </nav>
            <p>{props.description}</p>
        </article>
    )
}
