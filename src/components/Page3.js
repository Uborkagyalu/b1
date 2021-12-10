import Clock from './Clock';
import { useSelector, useDispatch } from 'react-redux';
import {setMainState} from '../actions';

const Page3 = (props) => {

  const selectedCity = useSelector(state => state.selectedCity);
  const dispatch = useDispatch();

  //constant object to link openWeatherApi weather descriptions with weather icons
  const iconMap = {
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

//function to determine if it is daytime or nighttime (day is from 6am to 6pm)
  const dayornight = () => {
    var date = new Date();
    if (date.getHours() >= 6 && date.getHours() < 18) {
      return "day";
    } else {
      return "night";
    }
  }

  return (
    <div className="page">
      <img className="backButton" src={require("../img/down-arrow.png").default} alt="+" onClick={()=>dispatch(setMainState("main"))} />
      <div className="page3infobox">
        <Clock timezone={selectedCity.timezone}></Clock>
        <div className="page3city">{selectedCity.name}</div>
        {//main weather icon displayed based on iconMap object, weather it is day or night and the weather api weather description
        }
        <i className={`page3icon wi ${iconMap[dayornight()][selectedCity.weather[0].main]}`}></i>
        <div className="page3text">{selectedCity.weather[0].description}</div>
        <div className="page3databox">
          <div className="iconcont">
            <i className="wi wi-thermometer"></i>
          </div>
          <div>{Math.round(selectedCity.main.temp)} <i className="wi wi-celsius"></i></div>
        </div>
        <div className="page3databox">
          <div className="iconcont">
            <i className="wi wi-sunrise"></i>
          </div>
          <div>
            {//displaying hours and minutes and adding 0 if it's for example 9am to get 09am etc.
            }
            {new Date(selectedCity.sys.sunrise * 1000).getHours() < 10 ? "0" + new Date(selectedCity.sys.sunrise * 1000).getHours() : new Date(selectedCity.sys.sunrise * 1000).getHours()}
            :
            {new Date(selectedCity.sys.sunrise * 1000).getMinutes() < 10 ? "0" + new Date(selectedCity.sys.sunrise * 1000).getMinutes() : new Date(selectedCity.sys.sunrise * 1000).getMinutes()}
          </div>
        </div>
        <div className="page3databox">
          <div className="iconcont">
            <i className="wi wi-sunset"></i>
          </div>
          <div>
            {new Date(selectedCity.sys.sunset * 1000).getHours() < 10 ? "0" + new Date(selectedCity.sys.sunset * 1000).getHours() : new Date(selectedCity.sys.sunset * 1000).getHours()}
            :
            {new Date(selectedCity.sys.sunset * 1000).getMinutes() < 10 ? "0" + new Date(selectedCity.sys.sunset * 1000).getMinutes() : new Date(selectedCity.sys.sunset * 1000).getMinutes()}
          </div>
        </div>
      </div>


    </div>
  );
}

export default Page3;