const mainStateReducer = (state = "main", action) => {
    switch(action.type) {
        case 'setMainState': {
            return state = action.target;
        }
        default:
            return state;
    }
}

export default mainStateReducer;