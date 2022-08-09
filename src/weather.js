const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const weather_description = document.querySelector('.weather-description')
const weather_icon = document.querySelector('.weather-icon')
const image = document.createElement('img')
const city = document.querySelector('.city')

async function getWeather() {
    const key = 'c3052d4861727d54201d760d99383718';
    const URL = `https://api.openweathermap.org/data/2.5/weather?id=3514972&appid=${key}`
    try {
        let weater = await fetch(URL);
        let result = await weater.json();
        console.log(result)
        temperature.innerHTML = Math.round(result.main.temp - 273) + ' &degC'
        humidity.innerHTML = 'Humidity: ' + result.main.humidity + ' %'
        wind.innerHTML = 'Wind speed: ' + result.wind.speed + ' m/s'
        weather_description.innerHTML = result.weather[0].description
        city.value = 'Mogilev'
        getIcon(result.weather[0].icon)
    } catch (err) {
        console.log(err)
    }
}
getWeather()

function getIcon(icon) {
    const URL = `http://openweathermap.org/img/w/${icon}.png`
    image.src = URL
    weather_icon.append(image)
}

