import states from '../states';

const selectedCityReducer = (state = {}, action) => {
    switch(action.type) {
        case states.setSelectedCity: {
            return action.target;
        }
        default:
            return state;
    }
}

export default selectedCityReducer;