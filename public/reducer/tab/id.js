import { SET_CURRENT_TAB } from './actions';

const initialState = 1;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TAB:
            return action.id;
        default:
            return state;
    }
};