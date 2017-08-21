import { SET_MISSIONS } from './actions';

const initialState = [];

export default(state = initialState, action) => {
    switch(action.type) {
        case SET_MISSIONS:
            return action.missions;
        default:
            return state;
    }
};
