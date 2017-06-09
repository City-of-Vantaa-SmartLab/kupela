import { SET_CURRENT_TAB } from './actions';
import tabs from '../../JSON/tabs';

const initialState = tabs[0].nameId;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TAB:
            return action.id;
        default:
            return state;
    }
};