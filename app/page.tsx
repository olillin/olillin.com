import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

import Projects from './components/Projects'
import Sites from './components/Sites'

import './style.css'
import Footer from './components/Footer'

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
                        I&apos;m a Swedish student at Chalmers studying
                        software engineering. I love learning and experiment
                        with all sorts of projects, typically involving a
                        healthy amount of programming.
                    </p>
                    <nav>
                        <a href="https://github.com/olillin">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                    </nav>
                </section>
                <Projects />
                <Sites />
                <Footer />
            </main>
        </>
    )
}
