const greeting = document.querySelector('.greeting')
const User_name = document.querySelector('.name')

let hours = getHours()
let greeting_mesage = ''
let name_contaner = localStorage.getItem('Person_name'); 

User_name.onblur = ()=>{
    localStorage.setItem('Person_name', User_name.value);
    name_contaner = localStorage.getItem('Person_name');
}

if(name_contaner) {
    User_name.value = name_contaner
}
/* function SayHello() {
    if (6 < hours  ) { greeting.innerHTML = 'Good morning' }
    if (12 < hours  ) { greeting.innerHTML = 'Good afternoon ' }    
    if (18 < hours  ) { greeting.innerHTML = 'Good evening' }
    if (21 < hours  ) { greeting.innerHTML = 'Good night' }
} */
function SayHello() {
    if (6 < hours  ) { greeting_mesage = 'Good morning' }
    if (12 < hours  ) { greeting_mesage = 'Good afternoon ' }    
    if (18 < hours  ) { greeting_mesage = 'Good evening' }
    if (0 < hours  ) { greeting_mesage = 'Good night' }
}
setInterval(() => {
    SayHello()
    if(greeting.textContent != greeting_mesage) {
        greeting.innerHTML =  greeting_mesage 
    }
}, 1000);
 
    



 
 
 