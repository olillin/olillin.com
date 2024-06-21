import Script from 'next/script'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

import Projects from './components/Projects'

import './style.css'

export default function Page(): React.ReactNode {
    return (
        <>
            <Script src="/scripts/parallax-effect.js" />

            <section className="intro">
                <img src="/images/olillin.svg" alt="Olillin logo" className="logo" />
                <h1>Hey, I'm Oli!</h1>
                <p>I'm a Swedish student of information technology with a passion for code and understanding. I experiment with all sorts of bits and bobs, typically involving a healthy amount of programming.</p>
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
        </>
    )
}
