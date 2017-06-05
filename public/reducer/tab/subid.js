import tabs from '../../JSON/tabs';
import { SET_CURRENT_SUB_TAB } from './actions';

const initialState = tabs[1].components[0].routes[0].nameId;

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_SUB_TAB:
            return action.subid;
        default:
            return state;
    }
}