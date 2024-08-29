import { getWeatherData } from "./weatherManager";
import { renderWeather } from "./render";

const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", async () => {
    const location = document.getElementById("location").value;
    const data = await getWeatherData();
    if (data) {
        renderWeather(data, location);
    }
});
