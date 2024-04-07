function easeOut(t) {
    return Math.sin((t * Math.PI) / 2)
}

const intensity = 2

document.addEventListener('mousemove', mouseEvent => {
    const halfWidth = window.innerWidth / 2
    const halfHeight = window.innerHeight / 2

    let relativeOffsetX = (mouseEvent.x - halfWidth) / halfWidth
    let relativeOffsetY = (mouseEvent.y - halfHeight) / halfHeight

    document.body.style.backgroundPositionX = -easeOut(relativeOffsetX) * intensity - intensity + 'vw'
    document.body.style.backgroundPositionY = -easeOut(relativeOffsetY) * intensity - intensity + 'vh'
})
