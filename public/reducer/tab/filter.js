import { ADD_SUBITEM_FILTER, REMOVE_SUBITEM_FILTER } from './actions';

const initialState = {
    arr: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUBITEM_FILTER:
            return Object.assign({}, state, {
                arr: [...state.arr, action.filters]
            });
        case REMOVE_SUBITEM_FILTER:
            return Object.assign({}, state, {
                arr: [...state.arr.slice(0, action.filters), ...state.arr.slice(action.filters + 1)]
            });
        default:
            return state;
    }
}