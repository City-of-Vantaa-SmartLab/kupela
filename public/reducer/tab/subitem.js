import { SET_AS_MAIN_SUBCONTENT } from './actions';
import tabs from '../../JSON/tabs';

const initialState = tabs[1].components[0].routes[0].routes[0];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AS_MAIN_SUBCONTENT:
            return action.subitem;
        default:
            return state;
    }
}