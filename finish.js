const a = Array.from(document.querySelectorAll('.col'))

a.forEach(a => a.addEventListener('click', () => {
    a.classList.add('ok')
    const key = a.getAttribute(`data-key`)
    playSound(key)
}))

a.forEach(a => a.addEventListener('transitionend', removeCl))

document.addEventListener('keydown', (e) => {
    changeCl(e)
    const key = e.keyCode
    playSound(key)
})
function playSound(e) {
    const sounds = document.querySelector(`audio[data-key="${e}"]`)
    if (!sounds) { return }
    sounds.currentTime = 0
    sounds.play()
}
function changeCl(e) {
    const keys = e.keyCode
    const div = document.querySelector(`div[data-key="${keys}"]`)
    if (div) {
        div.classList.add('ok')
    }
}

function removeCl(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('ok');
}