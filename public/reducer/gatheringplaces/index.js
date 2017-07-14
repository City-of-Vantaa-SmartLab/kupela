import { LOAD_GATHER_PLACES } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GATHER_PLACES:
            return action.places;
        default:
            return state;
    }
}