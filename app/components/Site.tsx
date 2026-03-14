import { faGithub } from '@fortawesome/free-brands-svg-icons'
import grid from '../style/grid.module.scss'
import LinkRow from './LinkRow'

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
    const title = name ?? prettyLink

    return (
        <article className={grid.article}>
            <h3>{title}</h3>
            <LinkRow
                small
                links={[
                    {
                        href: href,
                        text: prettyLink,
                    },
                    source && {
                        href: source,
                        text: 'Source',
                        icon: faGithub,
                    },
                ]}
            />
        </article>
    )
}
