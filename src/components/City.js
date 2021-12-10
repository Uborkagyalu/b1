import { useDispatch } from 'react-redux';
import {setMainState, setSelectedCity} from '../actions';
import citylist from '../weatherAPIcities/capitals.js';

const City = (props) => {

  const dispatch = useDispatch();

  //weather api fetch based on city name
  const cityClick = (e) => {
    var cityInQ = citylist.find((city) => {
      return city.name === e.target.innerHTML;
    });

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityInQ.id}&units=metric&appid=${'4c71907ca8cf2a1caf5113e825c213bd'}`).then((res) => {
      return res.json();
    }).then((res) => {
      dispatch(setSelectedCity(res));
      dispatch(setMainState("Page3"));
    });
  }

  return (
    <div className="cityName" onClick={cityClick}>{props.city.name}</div>
  );
}

export default City;