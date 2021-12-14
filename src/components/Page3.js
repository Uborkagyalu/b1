import Clock from './Clock';
import { useSelector, useDispatch } from 'react-redux';
import { setMainState } from '../actions';
import arrowimage from '../img/down-arrow.png';
import nav from '../nav';
import utils from '../utils';

const Page3 = (props) => {

  const selectedCity = useSelector(state => state.selectedCity);
  const dispatch = useDispatch();
  const date = new Date();

  const dayornight = () => {
    if (date.getHours() >= 6 && date.getHours() < 18) {
      return "day";
    } else {
      return "night";
    }
  }

  return (
    <div className="page">
      <img className="backButton" src={arrowimage} alt="+" onClick={() => dispatch(setMainState(nav.main))} />
      <div className="page3infobox">
        <Clock timezone={selectedCity.timezone}></Clock>
        <div className="page3city">{selectedCity.name}</div>
        <i className={`page3icon wi ${utils.iconMap[dayornight()][selectedCity.weather[0].main]}`}></i>
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
            {utils.getsunsetrise(selectedCity.sys.sunrise)}
          </div>
        </div>
        <div className="page3databox">
          <div className="iconcont">
            <i className="wi wi-sunset"></i>
          </div>
          <div>
            {utils.getsunsetrise(selectedCity.sys.sunset)}
          </div>
        </div>
      </div>


    </div>
  );
}

export default Page3;