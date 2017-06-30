import { LOAD_CONTACTS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_CONTACTS:
            return action.contacts;
        default:
            return state;
    }
}