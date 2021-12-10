import './App.css';
import './CSS/weather-icons-wind.css';
import './CSS/weather-icons-wind.min.css';
import './CSS/weather-icons.css';
import './CSS/weather-icons.min.css';

import React from 'react';
import { useSelector } from 'react-redux';
import Main from './components/Main';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App(props) {

  const mainState = useSelector(state => state.mainState);

  //switch determining what to display based on mainState
  switch (mainState) {
    case "main":
      return (
        <Main></Main>
      );
    case "Page2":
      return (
        <Page2></Page2>
      );
    case "Page3":
      return (
        <Page3></Page3>
      );
    default:
      return (
        <Main></Main>
      );
  }
}

export default App;
