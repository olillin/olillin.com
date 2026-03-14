import { Metadata } from 'next'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import './style/global.scss'
import ParallaxBackgroundEffect from './components/ParallaxBackgroundEffect'

export const metadata: Metadata = {
    title: 'Olillin',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ParallaxBackgroundEffect>{children}</ParallaxBackgroundEffect>
            </body>
        </html>
    )
}
