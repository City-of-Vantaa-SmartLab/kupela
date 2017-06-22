import { ADD_SUBITEM_FILTER, RESET_FILTER_ARRAY } from './actions';

const initialState = {
    arr: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUBITEM_FILTER:
            let index = state.arr.findIndex((item) => item.id === action.filters.id);
            if(index === -1) {
                return Object.assign({}, state, {
                    arr: [...state.arr, action.filters]
                });
            } else {
                return Object.assign({}, state, {
                    arr: [
                        ...state.arr.filter((item) => item.id !== action.filters.id)
                    ]
                })
            }
        case RESET_FILTER_ARRAY:
            return initialState;
        default:
            return state;
    }
}