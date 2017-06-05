import { SHOW_MODAL, HIDE_MODAL } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case SHOW_MODAL:
            return action.id;
        case HIDE_MODAL:
            return initialState;
        default:
            return state;
    }
}