import { LOAD_HENKILOSTO } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_HENKILOSTO:
            return action.henkilosto;
        default:
            return state;
    }
}