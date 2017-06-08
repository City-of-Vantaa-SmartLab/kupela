import { SET_AS_MAIN_SUBCONTENT } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AS_MAIN_SUBCONTENT:
            return action.subitem;
        default:
            return state;
    }
}