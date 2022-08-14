const slide_prev = document.querySelector('.slide-prev')
const slide_next = document.querySelector('.slide-next')
const bodybg = document.querySelector('body')
const min = 1;
const max = 20;

let random = randomNumber(min, max)
setBg(random, 'next')


function PartOfDay() {
    let part_of_day = getHours()
    if (6 < part_of_day < 12) { part_of_day = 'morning' }
    if (12 < part_of_day < 18) { part_of_day = 'afternoon' }
    if (18 < part_of_day < 21) { part_of_day = 'evening' }
    if (21 < part_of_day < 6) { part_of_day = 'night' }
    return part_of_day
}

function randomNumber(min, max) {
    let r = Math.random() * (max - min) + min
    r = Math.floor(r)
    if (String(r).length < 2) { r = '0' + r }
    return r
}

function SetRandom(random, step) {
    random = Number(random)
    if (step == 'prev') { random-- }
    if (step == 'next') { random++ }
    if (random > 20) { random = min }
    if (random === 0) { random = max }
    if (String(random).length < 2) { random = '0' + random }
    return random

}

slide_prev.onclick = () => {
    random = SetRandom(random, 'prev')
    setBg(random, 'prev')
}

slide_next.onclick = () => {
    random = SetRandom(random, 'next')
    setBg(random, 'next')
}

function setBg(random, position) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${PartOfDay()}/${random}.jpg`
    img.onload = () => {
        bodybg.style.backgroundImage = `url(${img.src})`
    };
    img.onerror = function () {
        random = SetRandom(random, position)
        setBg(random)
    }
};





