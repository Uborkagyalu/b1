import capitals from '../weatherAPIcities/capitals.js';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {setMainState, addcity} from '../actions';
import { useState } from 'react';
import arrowimage from '../img/down-arrow.png';
import nav from '../nav';

const Page2 = (props) => {

  const [inputvalue, setInputvalue] = useState("");

  const cities = useSelector(state => state.cityList);
  const dispatch = useDispatch();

  const getfilteredCityList = () => {
      
      let filteredArray = capitals.map((city) => city.name);
      return filteredArray.filter((city) => {
        return !cities.find((selectedCity) => selectedCity.name === city);
      });
    }

  const saveClickHandler = () => {
    if (inputvalue !== "") {
      dispatch(addcity(inputvalue));
      dispatch(setMainState(nav.main));
    }
  }

  const inputChangeHandler = (e, value) => {
    setInputvalue(value);
  }

  return (
    <div className="page">
      <img className="backButton" src={arrowimage} alt="+" onClick={()=>dispatch(setMainState("main"))} />
      <Autocomplete
        onChange={inputChangeHandler}
        id="citySelection"
        options={getfilteredCityList()}
        sx={{ width: "80vw" }}
        renderInput={(params) => (
          <TextField {...params} />
        )}
        renderOption={(params, option, { inputValue }) => {
          const matches = match(option, inputValue);
          const parts = parse(option, matches);

          return (
            <div {...params}>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    color: part.highlight ? "#164f70" : "#90a7ab"
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          );
        }}
      />
      <div className={`saveButton button ${inputvalue === "" ? 'displayNone' : ""}`} id="saveButton" onClick={saveClickHandler}>Save</div>
    </div>

  );
}

export default Page2;