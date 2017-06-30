import { LOAD_RESCUEPLANS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RESCUEPLANS:
            return action.rescueplans;
        default:
            return state;
    }
}