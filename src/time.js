const time = document.querySelector('.time')
const timeConainer = document.querySelectorAll('.time-item')

function getDate() {
    return new Date
}
function getHours() {
    return getDate().getHours()
}
function getMinutes() {
    return getDate().getMinutes()
}
function getSeconds(){
    return getDate().getSeconds()
}

setInterval(() => {
    timeConainer[0].innerHTML = getHours()
    timeConainer[2].innerHTML = getMinutes()
    timeConainer[4].innerHTML = getSeconds()
}, 1000);
