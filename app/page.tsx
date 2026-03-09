import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

import Projects from './components/Projects'
import Sites from './components/Sites'

import './style.css'

export default function Page(): React.ReactNode {
    return (
        <>
            <meta
                name="description"
                content="Oli's introduction and portfolio featuring different coding projects and links."
            />

            <main>
                <section className="intro">
                    <Image
                        src="/images/olillin.svg"
                        alt="Olillin logo"
                        width="80"
                        height="80"
                        className="logo"
                    />
                    <h1>Hey, I&apos;m Oli!</h1>
                    <p>
                        I&apos;m a Swedish student of information technology
                        with a passion for code and understanding. I experiment
                        with all sorts of bits and bobs, typically involving a
                        healthy amount of programming.
                    </p>
                    <nav>
                        <a href="https://github.com/olillin">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                        <a href="https://youtube.com/@olillin">
                            <FontAwesomeIcon icon={faYoutube} /> YouTube
                        </a>
                    </nav>
                </section>
                <Projects />
                <Sites />
            </main>
        </>
    )
}
