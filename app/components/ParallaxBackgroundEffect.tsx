'use client'

import { ReactNode, useEffect, useState } from 'react'

export default function ParallaxBackgroundEffect({
    children,
}: {
    children: ReactNode
}) {
    const [isReduced, setIsReduced] = useState(true)

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(prefers-reduced-motion: reduce)`)
        const updateReduced = () => {
            setIsReduced(mediaQuery.matches)
        }
        updateReduced()
        window.addEventListener('focus', updateReduced)
        mediaQuery.addEventListener('change', updateReduced)
    }, [])

    useEffect(() => {
        if (isReduced) return

        const intensity = 2
        const eventHandler = (mouseEvent: MouseEvent) => {
            const halfWidth = window.innerWidth / 2
            const halfHeight = window.innerHeight / 2

            const relativeOffsetX = (mouseEvent.x - halfWidth) / halfWidth
            const relativeOffsetY = (mouseEvent.y - halfHeight) / halfHeight

            document.body.style.backgroundPositionX =
                -easeOut(relativeOffsetX) * intensity - intensity + 'vw'
            document.body.style.backgroundPositionY =
                -easeOut(relativeOffsetY) * intensity - intensity + 'vh'
        }

        window.addEventListener('mousemove', eventHandler)
        return () => {
            window.removeEventListener('mousemove', eventHandler)
        }
    }, [isReduced])

    return <div>{children}</div>
}

function easeOut(t: number): number {
    return Math.sin((t * Math.PI) / 2)
}
