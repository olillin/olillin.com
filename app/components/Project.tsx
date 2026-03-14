import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import grid from '../style/grid.module.scss'
import LinkRow from './LinkRow'

export default async function Project({
    name,
    description,
    website,
    source,
}: {
    name: string
    description: string
    source: string
    website?: string
}) {
    return (
        <article className={grid.article}>
            <h3>{name}</h3>
            <LinkRow
                small
                links={[
                    website && {
                        href: website,
                        text: 'Website',
                        icon: faGlobe,
                    },
                    {
                        href: source,
                        text: 'Source',
                        icon: faGithub,
                    },
                ]}
            />
            <p>{description}</p>
        </article>
    )
}
