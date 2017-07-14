import { ADD_CAROUSEL } from './actions';

const initialState = {
    carousel: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAROUSEL:
            if(action.itemArray.length > 1) {
                return Object.assign({}, state, {
                    carousel: !state.carousel
                });
            } else {
                return initialState;
            }
        default:
            return state;
    }
}