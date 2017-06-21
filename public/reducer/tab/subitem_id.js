import { CLICKED_SUBITEM } from './actions';
import sprinklers from '../../JSON/sprinklers';

const initialState = sprinklers[0].nameId;

export default (state = initialState, action) => {
    switch (action.type) {
        case CLICKED_SUBITEM:
            return action.subitemId;
        default:
            return state;
    }
}