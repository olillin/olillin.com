import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import linkRow from './LinkRow.module.scss'

export interface LinkOptions {
    href: string
    text?: string
    icon?: IconDefinition
}

export default function LinkRow({
    links,
    small,
}: {
    links: (LinkOptions | null)[]
    small?: boolean
}) {
    return (
        <nav className={small ? linkRow.smallRow : linkRow.row}>
            {links.map(link =>
                link == null ? null : (
                    <Link
                        href={link.href}
                        className={linkRow.link}
                        key={link.href}
                    >
                        {link.icon != undefined && (
                            <>
                                <FontAwesomeIcon icon={link.icon} />{' '}
                            </>
                        )}
                        {link.text ?? link.href}
                    </Link>
                )
            )}
        </nav>
    )
}
