import City from "./City";
import React from 'react';
import { useSelector } from 'react-redux';

const selectedCities = state => state.cityList;

const Main = (props) => {

  //get cities from redux store
  const cities = useSelector(selectedCities);

  const addButtonHandler = () => {
    props.setMainState("Page2");
  }

  return (
    <div className="main page">
      <div className="cityCont">
        {
        //map trough cities from store and display a city component for each
        cities.map((city, index) => {
          return (<City
            key={index}
            city={city}
            setSelectedCity={props.setSelectedCity}
            setMainState={props.setMainState}
          ></City>)
        })}

      </div>
      <div>
        <img className="addButton" src={require("../img/add.png").default} alt="+" onClick={addButtonHandler}/>
      </div>
    </div>
  );
}

export default Main;