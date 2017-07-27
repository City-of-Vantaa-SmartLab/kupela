import { CLICKED_SUBITEM } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case CLICKED_SUBITEM:
            return action.subitemId;
        default:
            return state;
    }
}