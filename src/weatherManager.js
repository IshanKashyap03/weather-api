export const processData = function(data){
    let obj = {
        conditions: data.currentConditions.conditions,
        temperature: data.currentConditions.temp,
        feelsLike: data.currentConditions.feelslike,
        humidity: data.currentConditions.humidity
    }
    
    return obj;
}

export const getWeatherData = async function() {
    const location = document.getElementById("location").value;

    if (!location) {
        alert("Please enter a location");
        return;
    }

    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=K2NYAEW85E8JYHK8E3YV2AVAW`, { mode: 'cors' });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const weatherData = await response.json();
        return processData(weatherData);
    } catch (error) {
        console.error("Error fetching the weather data:", error);
        alert("Failed to fetch weather data. Please try again.");
    }
}
