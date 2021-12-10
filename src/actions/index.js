export const setMainState = (targetState) => {
    return {
        type: 'setMainState',
        target: targetState
     }
}

export const setSelectedCity = (city) => {
    return {
        type: 'setSelectedCity',
        target: city
     }
}

export const addcity = (city) => {
    return {
        type: 'addcity',
        target: city
     }
}