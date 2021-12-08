import './App.css';
import './CSS/weather-icons-wind.css';
import './CSS/weather-icons-wind.min.css';
import './CSS/weather-icons.css';
import './CSS/weather-icons.min.css';

import React from 'react';
import { useState } from 'react';

import Main from './components/Main';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App(props) {
  //mainstate for main display
  const [mainState, setMainState] = useState("main");
  //api fetch result when city is selected
  const [selectedCity, setSelectedCity] = useState("");

  //switch determining what to display based on mainState
  switch (mainState) {
    case "main":
      return (
        <Main
          setMainState={setMainState}
          setSelectedCity={setSelectedCity}
        ></Main>
      );
    case "Page2":
      return (
        <Page2
          setMainState={setMainState}
          setSelectedCity={setSelectedCity}
          addCityFunc={props.addCityFunc}
        ></Page2>
      );
    case "Page3":
      return (
        <Page3
          setMainState={setMainState}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        ></Page3>
      );
    default:
      setMainState("main");
  }
}

export default App;
