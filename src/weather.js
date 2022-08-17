const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const weather_description = document.querySelector('.weather-description')
const weather_icon = document.querySelector('.weather-icon')
const image = document.createElement('img')
const city = document.querySelector('.city')
const weather_error = document.querySelector('.weather-error')

 
if(!localStorage.getItem('city')){
   localStorage.setItem('city', 'Mogilev' ); 
}


async function getWeather(cityName) {
    const key = 'c3052d4861727d54201d760d99383718';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&id=3514972&appid=${key}`
    try {
        let weater = await fetch(URL);
        let result = await weater.json();
         
        weather_error.innerHTML = ''
        temperature.innerHTML = Math.round(result.main.temp - 273) + ' &degC'
        humidity.innerHTML = 'Humidity: ' + result.main.humidity + ' %'
        wind.innerHTML = 'Wind speed: ' + result.wind.speed + ' m/s'
        weather_description.innerHTML = result.weather[0].description
        city.placeholder = "[Enter city]"
        city.value =  result.name
        getIcon(result.weather[0].icon)
    } catch (err) {
        weather_error.innerHTML = "Error, there isn't any weather "
        humidity.innerHTML = ''
        temperature.innerHTML = ''
        wind.innerHTML = ''
        weather_description.innerHTML = ''
        weather_icon.innerHTML = ''
    }
}
getWeather( localStorage.getItem('city') )

function getIcon(icon) {
    const URL = `http://openweathermap.org/img/w/${icon}.png`
    image.src = URL
    weather_icon.append(image)
}

function SetCity(){
    city.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        getWeather(city.value)  
        localStorage.setItem('city', city.value ); 
       
    } 
})
}
SetCity()

city.onblur = () =>{
    getWeather(city.value) 
    localStorage.setItem('city', city.value );
     
}


    


 
