function displayTemperature (response){
    console.log(response.data.temperature)
    let temperatureElement = document.querySelector ("#temperature");
    let cityElement = document.querySelector("#city");
    let description = document.querySelector ("#description");
    let humidityElement = document.querySelector ("#humidity");
    let windElement = document.querySelector("#wind")
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
cityElement.innerHTML = response.data.city;
description.innerHTML = response.data.condition.description;
humidityElement.innerHTML = response.data.temperature.humidity;
windElement.innerHTML =Math.round (response.data.wind.speed);
}


let apiKey = "5a032ao3cfdb5cb2a245077a27fe06ft";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={Vancouver}&key=${apiKey}&units=metric`

console.log(apiKey);
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
