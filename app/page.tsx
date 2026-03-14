import Intro from './components/Intro'
import Projects from './components/Projects'
import Sites from './components/Sites'

import Footer from './components/Footer'

export default function Page(): React.ReactNode {
    return (
        <>
            <meta
                name="description"
                content="Oli's introduction and portfolio featuring different coding projects and links."
            />

            <main>
                <Intro />
                <Projects />
                <Sites />
                <Footer />
            </main>
        </>
    )
}
