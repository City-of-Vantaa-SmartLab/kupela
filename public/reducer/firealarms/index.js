import { LOAD_FIREALARMS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FIREALARMS:
            return action.firealarms;
        default:
            return state;
    }
}