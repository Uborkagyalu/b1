import states from '../states';
import nav from '../nav';

const mainStateReducer = (state = nav.main, action) => {
    switch(action.type) {
        case states.setMainState: {
            return state = action.target;
        }
        default:
            return state;
    }
}

export default mainStateReducer;