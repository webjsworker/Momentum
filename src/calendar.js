const day = document.querySelector('.day')
const month = document.querySelector('.month')
const day_numbers = document.querySelector('.day-numbers')

const daysRU = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const daysEN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsRU = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const monthsEN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date()
day_numbers.innerHTML = date.getDate()
day.innerHTML = daysEN[date.getDay()]
month.innerHTML = monthsEN[date.getMonth()]

 


