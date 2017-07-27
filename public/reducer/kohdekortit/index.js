import { LOAD_KOHDEKORTIT } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_KOHDEKORTIT:
            return action.kohdekortit;
        default:
            return state;
    }
}