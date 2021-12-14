import states from '../states';

const cityListReducer = (state = JSON.parse(localStorage.getItem("localCityList")) || [{name: "Budapest"}], action) => {
    switch(action.type) {
        case states.addcity: {
            state = [...state, {name: action.target}];
            localStorage.setItem("localCityList", JSON.stringify(state));
            return state;
        }
        default:
            return state;
    }
}

export default cityListReducer;
