import { ARROW_BUTTON_CLICKED } from './actions';

const initialState = {
    index: 0,
    direction: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ARROW_BUTTON_CLICKED:
            return Object.assign({}, state, {
                index: action.index,
                direction: action.direction
            });
        default:
            return state;
    }
}