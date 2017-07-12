import { SHARE_BUTTON_CLICKED, ADD_SHAREABLE_ITEM } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHAREABLE_ITEM:
            return [...state,
                {
                    id: action.id,
                    isShared: false
                }];
        case SHARE_BUTTON_CLICKED:
            return state.map(item =>
                (item.id === action.id)
                    ? Object.assign({}, item, {isShared: !item.isShared})
                    : item);
        default:
            return state;
    }
}