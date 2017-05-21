import { SHOW_CURRENT_TABCONTENT } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CURRENT_TABCONTENT:
            return action.content;
        default:
            return state;
    };
}