import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import intro from './Intro.module.scss'
import LinkRow from './LinkRow'

export default function Intro() {
    return (
        <section className={intro.intro}>
            <Image
                src="/images/olillin.svg"
                alt="Olillin logo"
                width="80"
                height="80"
                className={intro.logo}
            />
            <h1>Hey, I&apos;m Oli!</h1>
            <p>
                I&apos;m a Swedish student at Chalmers studying software
                engineering. I love learning and experiment with all sorts of
                projects, typically involving a healthy amount of programming.
            </p>
            <LinkRow
                links={[
                    {
                        href: 'https://github.com/olillin',
                        text: 'GitHub',
                        icon: faGithub,
                    },
                ]}
            />
        </section>
    )
}
