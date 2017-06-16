import { SET_INFO_SHARED } from './actions';

const initialState = {
    arr: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO_SHARED:
            return Object.assign({}, state, {
                arr: [...state.arr, action.infoProps]
            });
        default:
            return state;
    }
}