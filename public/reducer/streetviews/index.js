import { LOAD_STREETVIEWS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STREETVIEWS:
            return action.streetviews;
        default:
            return state;
    }
}