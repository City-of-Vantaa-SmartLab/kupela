import { SET_PAGES } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGES:
            return action.pages;
        default:
            return state;
    }
};