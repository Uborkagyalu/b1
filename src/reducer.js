
const initState = {
    cityList: [{name: "Budapest"}]
};

export default function appReducer(state = initState, action) {
    switch(action.type) {

        case 'cityList/addcity': {
            return {
                cityList: [...state.cityList, {name: action.payload}]
            }
        }
        default:
            return state
    }
}
