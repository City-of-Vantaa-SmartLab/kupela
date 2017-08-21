import { SET_MISSION_PROFILE } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MISSION_PROFILE:
            return action.profile;
        default:
            return state;
    }
};
