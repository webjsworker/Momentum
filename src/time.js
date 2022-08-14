const time = document.querySelector('.time')
const timeConainer = document.querySelectorAll('.time-item')

function getDate() {
    return new Date
}
function getHours() {
    if(String(getDate().getHours()).length < 2 ){
        return `0${getDate().getHours()}`
    }
    return getDate().getHours()
}
function getMinutes() {
    if(String(getDate().getMinutes()).length < 2){
        return `0${getDate().getMinutes()}`
    }
    return getDate().getMinutes()
}
function getSeconds(){
    if(String(getDate().getSeconds()).length < 2 ){
      return `0${getDate().getSeconds()}`    
    } 
    return  getDate().getSeconds()
    
}

setInterval(() => {
    timeConainer[0].innerHTML = getHours()
    timeConainer[2].innerHTML = getMinutes()
    timeConainer[4].innerHTML = getSeconds()
}, 1000);
