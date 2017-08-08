import { SET_CURRENT_TAB } from './actions';
import tabs from '../../JSON/tabs';


//gets the url, splits it until the parameters needed are left.
var str = window.location.href;
var res = str.split("#/");
res = res[1].split("/");
const initialState = res[2];
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TAB:
            var str = window.location.href;
            var res = str.split("#/");
            res = res[1].split("/");
            return res[2];
        default:
            return state;
    }
};