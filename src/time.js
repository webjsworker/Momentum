const time = document.querySelector('.time')
const timeConainer = document.querySelectorAll('.time-item')

console.log(timeConainer)

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

console.log(getHours())
console.log(getMinutes())
console.log(getSeconds())

setInterval(() => {
    timeConainer[0].innerHTML = getHours()
    timeConainer[2].innerHTML = getMinutes()
    timeConainer[4].innerHTML = getSeconds()
}, 1000);



/* dd = pad(date.getDate()), // День 
hh = pad(date.getHours()),
mm = pad(date.getMinutes()),
ss = pad(date.getSeconds()); */