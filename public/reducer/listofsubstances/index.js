import { LOAD_LIST_OF_SUBSTANCES } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LIST_OF_SUBSTANCES:
            return action.list;
        default:
            return state;
    }
}