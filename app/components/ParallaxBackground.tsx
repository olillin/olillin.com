'use client'

import { ReactNode, useEffect } from "react";

export default function ParallaxBackground({ children }: { children: ReactNode }) {
    useEffect(() => {
		const eventHandler = createParallaxHandler(2)
        window.addEventListener('mousemove', eventHandler)
		return () => {
			window.removeEventListener('mousemove', eventHandler)
		}
    }, [])

	return (
		<div className="parallax">
			{children}
		</div>
    )
}

function easeOut(t: number): number {
    return Math.sin((t * Math.PI) / 2)
}

function createParallaxHandler(intensity: number) {
    return (mouseEvent: MouseEvent) => {
        const halfWidth = window.innerWidth / 2
        const halfHeight = window.innerHeight / 2

        let relativeOffsetX = (mouseEvent.x - halfWidth) / halfWidth
        let relativeOffsetY = (mouseEvent.y - halfHeight) / halfHeight

        document.body.style.backgroundPositionX = -easeOut(relativeOffsetX) * intensity - intensity + 'vw'
        document.body.style.backgroundPositionY = -easeOut(relativeOffsetY) * intensity - intensity + 'vh'
    }
}
