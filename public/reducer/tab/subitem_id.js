import { CLICKED_SUBITEM } from './actions';
import tabs from '../../JSON/tabs';

const initialState = tabs[1].components[0].routes[0].routes[0].nameId;

export default (state = initialState, action) => {
    switch (action.type) {
        case CLICKED_SUBITEM:
            return action.subitemId;
        default:
            return state;
    }
}