import City from "./City";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setMainState} from '../actions';

const Main = (props) => {

  const cities = useSelector(state => state.cityList);
  const dispatch = useDispatch();

  return (
    <div className="main page">
      <div className="cityCont">
        {
        //map trough cities from store and display a city component for each
        cities.map((city, index) => {
          return (<City
            key={index}
            city={city}
          ></City>)
        })}

      </div>
      <div>
        <img className="addButton" src={require("../img/add.png").default} alt="+" onClick={()=>dispatch(setMainState("Page2"))}/>
      </div>
    </div>
  );
}

export default Main;