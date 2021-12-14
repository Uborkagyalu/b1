
const FetchWeatherData = (id) => {
    require('dotenv').config();
    const key = process.env.REACT_APP_API_KEY;
    return fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${key}`).then((res) => {
        return res.json();
    });
}
export default FetchWeatherData;