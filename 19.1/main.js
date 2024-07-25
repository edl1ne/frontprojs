const apiKey = '3d1d50547069be979e05b91c1a0e82ca'; // Замініть на свій API ключ
const city = 'Kyiv'; // Замініть на потрібне місто
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

document.getElementById('refresh-button').addEventListener('click', fetchWeather);

function fetchWeather() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('weather-description').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Завантажуємо погоду при завантаженні сторінки
fetchWeather();
