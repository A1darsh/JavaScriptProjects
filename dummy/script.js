function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your API key from OpenWeatherMap

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            if (data.cod === "404") {
                weatherInfo.innerHTML = `<p>City not found!</p>`;
            } else {
                const description = data.weather[0].description;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                weatherInfo.innerHTML = `
                    <p>Weather: ${description}</p>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Humidity: ${humidity}%</p>
                `;
            }
        })
        .catch(error => console.log(error));
}
