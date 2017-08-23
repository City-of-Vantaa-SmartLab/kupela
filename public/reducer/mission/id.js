import { SET_CURRENT_MISSION } from './actions';

const initialState = 0;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_MISSION:
            return action.id;
        default:
            return state;
    }
};
