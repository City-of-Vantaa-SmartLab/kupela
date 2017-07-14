import { ADD_SUBITEM_FILTER, RESET_FILTER_ARRAY } from './actions';

const initialState = {
    arr: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUBITEM_FILTER:
            //checks if the component's type is 'noLayer'
            if(action.filters.itemType === 'noLayer'){
                let type = state.arr.findIndex((item) => item.itemType === 'yesLayer');
                if(type === -1) {
                    return Object.assign({}, state, {
                        arr: [
                            ...state.arr.filter((item) => item.itemType !== 'noLayer'),
                            action.filters
                        ]
                    });
                } else {
                    return Object.assign({}, state, {
                        arr: [
                            ...state.arr.filter((item) => item.itemType !== 'yesLayer'),
                            action.filters
                        ]
                    });
                }
            } else {
                //checks if the component's type is 'yesLayer'
                let type = state.arr.findIndex((item) => item.itemType === 'noLayer');
                if(type === -1) {
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
                        });
                    }
                } else {
                    return Object.assign({}, state, {
                        arr: [
                            ...state.arr.filter((item) => item.itemType !== 'noLayer'),
                            action.filters
                        ]
                    });
                }
            }
        case RESET_FILTER_ARRAY:
            return initialState;
        default:
            return state;
    }
}