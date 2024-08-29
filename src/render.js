import "./styles.css";

export const renderWeather = (data, location) => {
    const content = document.getElementById("content");

    content.innerHTML = '';

    const weatherContent = document.createElement("div");

    weatherContent.innerHTML = `
    <div>
        <h2>Weather Report ${location}:</h2>
        <p>Conditions: ${data.conditions}</p>
        <p>Temperature: ${data.temperature}°C</p>
        <p>Feels Like: ${data.feelsLike}°C</p>
        <p>Humidity: ${data.humidity}%</p>
    </div>
    `;

    content.appendChild(weatherContent);

}