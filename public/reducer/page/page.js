import pages from '../../JSON/pages';
import { SET_CURRENT_PAGE } from './actions';

const initialState = pages[0];

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_PAGE:
            return action.page;
        default:
            return state;
    }
}