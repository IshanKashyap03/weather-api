async function getWeatherData() {
    const location = document.getElementById("location").value;

    if (!location) {
        alert("Please enter a location");
        return;
    }

    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`, { mode: 'cors' });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const weatherData = await response.json();
        console.log(weatherData);
    } catch (error) {
        console.error("Error fetching the weather data:", error);
        alert("Failed to fetch weather data. Please try again.");
    }
}
