const API_KEY = "a03c0c3ba01a8eb56dc2dd62f96171be";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C `;
            city.innerText = data.name;
        })
}

function onGeoError() {
    console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// getWeather();
