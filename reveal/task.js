const reveals = document.querySelectorAll('.reveal')

function isVisible(elem) {
    const { top, bottom } = elem.getBoundingClientRect()

    if ((bottom > 0) && (top < window.innerHeight)) {
        return true
    }
    return false
}

window.onscroll = () => {
    for (let index = 0; index < reveals.length; index++) {
        const reveal = reveals[index];
        if (isVisible(reveal)) {
            console.log('visible!')
            reveal.classList.add('reveal_active')
        }
    }
}