import { useDispatch } from 'react-redux';
import {setMainState, setSelectedCity} from '../actions';
import citylist from '../weatherAPIcities/capitals.js';
import nav from '../nav';
import FetchWeatherData from '../OpenWeatherFetchData';

const City = (props) => {

  const dispatch = useDispatch();

  //weather api fetch based on city name
  const cityClick = (e) => {
    let cityInQ = citylist.find((city) => {
      return city.name === props.city.name;
    });

    FetchWeatherData(cityInQ.id).then((res) => {
      dispatch(setSelectedCity(res));
      dispatch(setMainState(nav.Page3));
    });
  }

  return (
    <div className="cityName" onClick={cityClick}>{props.city.name}</div>
  );
}

export default City;