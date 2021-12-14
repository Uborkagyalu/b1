const utils = {
    getDefTime: (date, timezone) => {
        let timezoneHour = parseInt(date.getUTCHours()) + parseInt((parseInt(timezone) / 60 / 60));
        return  `${timezoneHour < 10 ? "0" + timezoneHour : timezoneHour}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
    },

    getsunsetrise: (setrise) => {
        let date = new Date(setrise * 1000);
        return `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
    },

    iconMap: {
        day: {
            Clouds: "wi-day-cloudy",
            Clear: "wi-day-sunny",
            Mist: "wi-day-fog",
            Smoke: "wi-smoke",
            Haze: "wi-day-fog",
            Dust: "wi-dust",
            Fog: "wi-day-fog",
            Sand: "wi-sandstorm",
            Ash: "wi-smoke",
            Squall: "wi-strong-wind",
            Tornado: "wi-tornado",
            Snow: "wi-day-snow",
            Rain: "wi-rain",
            Drizzle: "wi-day-showers",
            Thunderstorm: "wi-day-thunderstorm"
        },
        night: {
            Clouds: "wi-night-alt-cloudy",
            Clear: "wi-night-clear",
            Mist: "wi-night-fog",
            Smoke: "wi-smoke",
            Haze: "wi-day-fog",
            Dust: "wi-dust",
            Fog: "wi-night-fog",
            Sand: "wi-sandstorm",
            Ash: "wi-smoke",
            Squall: "wi-strong-wind",
            Tornado: "wi-tornado",
            Snow: "wi-night-snow",
            Rain: "wi-rain",
            Drizzle: "wi-night-alt-showers",
            Thunderstorm: "wi-night-alt-thunderstorm"
        }
    }
}
export default utils;


