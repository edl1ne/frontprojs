const apiKey = '3d1d50547069be979e05b91c1a0e82ca'; 
const city = 'Kyiv'; 

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        document.getElementById('city').textContent = data.name;
        document.getElementById('temperature').textContent = data.main.temp;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('datetime').textContent = new Date().toLocaleString();
    } catch (error) {
        console.error('Error:', error);
    }
}

window.onload = fetchWeather;
