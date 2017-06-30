import { SHARE_BUTTON_CLICKED } from './actions';

const initialState = {
    id: null,
    isShared: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHARE_BUTTON_CLICKED:
            return Object.assign({}, state, {
                id: action.id,
                isShared: action.isShared
            });
        default:
            return state;
    }
}