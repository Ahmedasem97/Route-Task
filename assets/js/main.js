const searchInput = document.querySelector('.search__input input');
const citiesList = document.querySelectorAll('.city__example ul li');
const currentTemp = document.querySelector('.current__temp span');
const currentCity = document.querySelector('.city__time .city span');
const currentTime = document.querySelector('.city__time .time span');
const currentCondition = document.querySelector('.info__icon .info span ');
const currentImg = document.querySelector('.info__icon img');
const secondImg = document.querySelectorAll('.day img');
const secondTemp = document.querySelectorAll('.day .temp');
const secondTime = document.querySelectorAll('.day .time');
const secondCondition = document.querySelectorAll('.condition__text');
const weatherDetails = document.querySelectorAll('.weather__details li span')

let weatherResponse;

(async function() {
    let weatherApi = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4b2610a0b9ea4edebf6171529232912&q=egypt&days=3`)
    weatherResponse = await weatherApi.json()
    displayWeather()
})()

async function fetchWeather() {
    let weatherApi = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4b2610a0b9ea4edebf6171529232912&q=${searchInput.value}&days=3`)
    weatherResponse = await weatherApi.json()
    displayWeather()
}
console.log(Math.round(Date.now() / Date.UTC(2024,5,16)));


searchInput.addEventListener('keyup', function () {
    fetchWeather()
})

for (const city of citiesList) {
    city.addEventListener('click', function (e) {
        searchInput.value = e.target.textContent
        fetchWeather()
    })
}

function displayWeather() {
    currentTemp.innerHTML = `${weatherResponse.current.temp_c}<sup>o</sup>c`
    currentCity.innerHTML = weatherResponse.location.name
    currentTime.innerHTML = weatherResponse.forecast.forecastday[0].date
    currentImg.setAttribute('src', weatherResponse.current.condition.icon)
    currentCondition.innerHTML = weatherResponse.current.condition.text
    secondImg[0].setAttribute('src', weatherResponse.forecast.forecastday[1].day.condition.icon)
    secondImg[1].setAttribute('src', weatherResponse.forecast.forecastday[2].day.condition.icon)
    secondTemp[0].innerHTML = `${weatherResponse.forecast.forecastday[1].day.avgtemp_c}<sup>o</sup>c`
    secondTemp[1].innerHTML = `${weatherResponse.forecast.forecastday[2].day.avgtemp_c}<sup>o</sup>c`
    secondTime[0].innerHTML = weatherResponse.forecast.forecastday[1].date
    secondTime[1].innerHTML = weatherResponse.forecast.forecastday[2].date
    secondCondition[0].innerHTML = weatherResponse.forecast.forecastday[1].day.condition.text
    secondCondition[1].innerHTML = weatherResponse.forecast.forecastday[2].day.condition.text
    weatherDetails[0].innerHTML = weatherResponse.current.cloud + "%"
    weatherDetails[1].innerHTML = weatherResponse.current.humidity + "%"
    weatherDetails[2].innerHTML = weatherResponse.current.wind_kph + "km/h"
    console.log(weatherResponse);
}
