import citylistReducer from './cityList';
import mainStateReducer from './mainState';
import selectedCityReducer from './selectedCity';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    cityList: citylistReducer,
    mainState: mainStateReducer,
    selectedCity: selectedCityReducer
});

export default allReducers;