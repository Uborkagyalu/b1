import './App.css';

import './CSS/weather-icons.css';
import nav from './nav';

import React from 'react';
import { useSelector } from 'react-redux';
import Main from './components/Main';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App(props) {

  const mainState = useSelector(state => state.mainState);
  
  switch (mainState) {
    case nav.main:
      return (
        <Main></Main>
      );
    case nav.Page2:
      return (
        <Page2></Page2>
      );
    case nav.Page3:
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
