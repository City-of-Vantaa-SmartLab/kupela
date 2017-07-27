import { SHARE_BUTTON_CLICKED, ADD_SHAREABLE_ITEM } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHAREABLE_ITEM:
            let index = state.findIndex((item) => item.id === action.id);
            if(index === -1) {
                return [...state,
                    {
                        id: action.id,
                        isShared: false
                    }];
            } else {
                return state;
            }
        case SHARE_BUTTON_CLICKED:
            return state.map((item) => {
                if(item.id === action.id) {
                    if(item.isShared === false) {
                        return Object.assign({}, item, {
                            isShared: !item.isShared
                        })
                    } else {
                        return item;
                    }
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
}