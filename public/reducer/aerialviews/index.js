import { LOAD_AERIAL_VIEWS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_AERIAL_VIEWS:
            return action.aerialviews;
        default:
            return state;
    }
}