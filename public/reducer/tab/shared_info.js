import { SET_INFO_SHARED } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO_SHARED:
            return action.infoProps;
        default:
            return state;
    }
}