const selectedCityReducer = (state = {}, action) => {
    switch(action.type) {
        case 'setSelectedCity': {
            return state = action.target;
        }
        default:
            return state;
    }
}

export default selectedCityReducer;