import { ADD_SUBITEM_FILTER, RESET_FILTER_ARRAY } from './actions';

const initialState = {
    arr: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUBITEM_FILTER:
            //noMap-tyyppiset komponentit
            if(action.filters.itemType === 'noMap'){
                let type = state.arr.findIndex((item) => item.itemType === 'yesMap');
                if(type === -1) {
                    return Object.assign({}, state, {
                        arr: [
                            ...state.arr.filter((item) => item.itemType !== 'noMap'),
                            action.filters
                        ]
                    });
                } else {
                    return Object.assign({}, state, {
                        arr: [
                            ...state.arr.filter((item) => item.itemType !== 'yesMap'),
                            action.filters
                        ]
                    });
                }
            } else {
                //yesMap-tyyppiset komponentit
                let type = state.arr.findIndex((item) => item.itemType === 'noMap');
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
                            ...state.arr.filter((item) => item.itemType !== 'noMap'),
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