import citylist from '../weatherAPIcities/citylist.js';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {setMainState, setSelectedCity, addcity} from '../actions';
import { useState } from 'react';

const Page2 = (props) => {

  const [inputvalue, setInputvalue] = useState("");

  const cities = useSelector(state => state.cityList);
  const dispatch = useDispatch();

  //function for an array of city names that are not currently in the store (not allowing to select same city twice)
  const getfilteredCityList = () => {
    const filteredArray = citylist;
    cities.map((selectedcity) => {
      return filteredArray.splice(citylist.findIndex((city) => {
        return city === selectedcity.name;
      }), 1);
    });
    return filteredArray;
  }

  const saveClickHandler = () => {
    var value = document.getElementById("citySelection").value;
    if (value !== "") {
      dispatch(addcity(value));
      dispatch(setMainState("main"));
    }
  }

  //compromise solution since onchange event cannot get input field value to store in state
  const inputChangeHandler = (e) => {
    var value = "";
    if(e.target.innerHTML.includes("path")){
      value = "";
    } else {
      value = e.target.innerHTML;
    }
    setInputvalue(value);
  }

  return (
    <div className="page">
      <img className="backButton" src={require("../img/down-arrow.png").default} alt="+" onClick={()=>dispatch(setMainState("main"))} />
      {// autocomplete module from Mui
      }
      <Autocomplete
        onChange={inputChangeHandler}
        id="citySelection"
        options={getfilteredCityList()}
        sx={{ width: "80vw" }}
        renderInput={(params) => (
          <TextField {...params} />
        )}
        renderOption={(params, option, { inputValue }) => {
          //highlight typed text based on autosuggest-highlight module
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
      {//state conditional className to display or hide save button
      }
      <div className={`saveButton button ${inputvalue === "" ? 'displayNone' : ""}`} id="saveButton" onClick={saveClickHandler}>Save</div>
    </div>

  );
}

export default Page2;