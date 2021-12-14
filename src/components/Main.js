import City from "./City";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setMainState} from '../actions';
import addimage from '../img/add.png';
import nav from '../nav';

const Main = (props) => {

  const cities = useSelector(state => state.cityList);
  const dispatch = useDispatch();

  return (
    <div className="main page">
      <div className="cityCont">
        {cities.map((city) => {
          return (<City
            key={city.name}
            city={city}
          ></City>)
        })}

      </div>
      <div>
        <img className="addButton" src={addimage} alt="+" onClick={()=>dispatch(setMainState(nav.Page2))}/>
      </div>
    </div>
  );
}

export default Main;