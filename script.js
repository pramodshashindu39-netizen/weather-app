
const apiKey = "6db95c545f702774c382de88800cc06f";

async function getWeather(city = "Colombo") {

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error("City not found!");
        }

        const data = await response.json();

        document.getElementById("city").textContent = data.name;

        document.getElementById("temperature").textContent =
            Math.round(data.main.temp) + "°C";

        document.getElementById("description").textContent =
            data.weather[0].description;

        document.getElementById("humidity").textContent =
            data.main.humidity + "%";

        document.getElementById("wind").textContent =
            data.wind.speed + " m/s";

    } catch (error) {
        alert(error.message);
    }
}

async function searchWeather() {

    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    getWeather(city);
}

getWeather();


