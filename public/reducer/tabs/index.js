import { SET_TABS } from './actions';

const initialState = [{
    id: 0,
    name: null,
    isActive: false
}];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TABS:
            return action.tabs;
        default:
            return state;
    }
};
