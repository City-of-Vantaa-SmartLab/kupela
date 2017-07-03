import { LOAD_CHEMICALCARDS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CHEMICALCARDS:
            return action.chemicalcards;
        default:
            return state;
    }
}