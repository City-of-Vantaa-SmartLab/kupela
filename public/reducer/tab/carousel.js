import { HANDLE_ITEM_LOAD } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_ITEM_LOAD:
            return action.event;
        default:
            return state;
    }
}