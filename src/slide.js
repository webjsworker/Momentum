const slide_prev = document.querySelector('.slide-prev')
const slide_next = document.querySelector('.slide-next')
const bodybg = document.querySelector('body')
const min = 1;
const max = 20;

let random = 0

function PartOfDay() {
    let part_of_day = getHours()
    if (6 < part_of_day < 12) { part_of_day = 'morning' }
    if (12 < part_of_day < 18) { part_of_day = 'evening' }
    if (18 < part_of_day < 6) { part_of_day = 'night' }
    return part_of_day
}

function randomNumber(min, max, step) {
    let r = Math.random() * (max - min) + min
    r = Math.floor(r)
    if (step == 'next') { r + 1 }
    if (step == 'prev') { r - 1 }
    if (r > 20) { r = min }
    if (r === 0) { r = max }
    return r
}

slide_prev.onclick = () => {
    random = randomNumber(min, max, 'prev')
    setBg(random, 'prev')
}

slide_next.onclick = () => {
    random = randomNumber(min, max, 'next')
    setBg(random, 'next')
}

function setBg(random, position) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${PartOfDay()}/${random}.jpg`
    img.onload = () => {
        bodybg.style.backgroundImage = `url(${img.src})`
    };
    img.onerror = function () {
        random = randomNumber(min, max, position)
        setBg(random)
    }
};





