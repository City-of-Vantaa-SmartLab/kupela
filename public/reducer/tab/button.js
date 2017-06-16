import { SHARE_BUTTON_CLICKED } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SHARE_BUTTON_CLICKED:
            return Object.assign({}, state, {
                label: action.label
            });
        default:
            return state;
    }
}