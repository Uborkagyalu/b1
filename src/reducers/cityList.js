const cityListReducer = (state = [{name: "Budapest"}], action) => {
    switch(action.type) {
        case 'addcity': {
            return [...state, {name: action.target}];
        }
        default:
            return state;
    }
}

export default cityListReducer;
