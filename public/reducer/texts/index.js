import { LOAD_TEXTS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_TEXTS:
            return action.texts;
        default:
            return state;
    }
}