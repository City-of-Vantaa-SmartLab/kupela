import tabs from '../../JSON/tabs';
import { SHOW_CURRENT_SUB_TABCONTENT, RESET_SUB_TABCONTENT } from './actions';

const initialState = tabs[1].components[0].routes[0];

export default (state = initialState, action) => {
    switch(action.type) {
        case SHOW_CURRENT_SUB_TABCONTENT:
            return action.subcontent;
        case RESET_SUB_TABCONTENT:
            return initialState;
        default:
            return state;
    }
}