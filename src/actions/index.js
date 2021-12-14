import states from '../states';

export const setMainState = (targetState) => {
    return {
        type:  states.setMainState,
        target: targetState
     }
}

export const setSelectedCity = (city) => {
    return {
        type: states.setSelectedCity,
        target: city
     }
}

export const addcity = (city) => {
    return {
        type: states.addcity,
        target: city
     }
}