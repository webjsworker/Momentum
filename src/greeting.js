const greeting = document.querySelector('.greeting')

let hours = getHours()

function SayHello() {
    console.log(hours)
    if (6 < hours < 12) { greeting.innerHTML = 'Good morning' }
    if (12 < hours < 18) { greeting.innerHTML = 'Good afternoon ' }    
    if (18 < hours < 21) { greeting.innerHTML = 'Good evening' }
    if (21 < hours < 6) { greeting.innerHTML = 'Good night' }
}
SayHello()
 



 
 
 