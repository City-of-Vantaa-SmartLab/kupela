import tabs from '../../JSON/tabs';
import { SHOW_CURRENT_TABCONTENT, SHOW_CURRENT_SUB_TABCONTENT } from './actions';

const initialState = tabs[0];

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CURRENT_TABCONTENT:
            return action.content;
        default:
            return state;
    }
};