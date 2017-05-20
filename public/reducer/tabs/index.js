import { SET_TABS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TABS:
            return action.tabs;
        default:
            return state;
    }
};
