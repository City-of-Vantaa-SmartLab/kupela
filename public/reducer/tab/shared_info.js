import { SET_INFO_SHARED } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO_SHARED:
            let index = state.findIndex((item) => item.id === action.id);
            if(index === -1) {
                return [...state, {
                    id: action.id,
                    content: action.content
                }]
            } else {
                return state;
            }
        default:
            return state;
    }
}