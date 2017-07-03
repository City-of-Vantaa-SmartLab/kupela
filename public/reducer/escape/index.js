import { LOAD_ESCAPE } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ESCAPE:
            return action.escape;
        default:
            return state;
    }
}