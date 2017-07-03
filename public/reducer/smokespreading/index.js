import { LOAD_SMOKESPREADING } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SMOKESPREADING:
            return action.smokespreading;
        default:
            return state;
    }
}