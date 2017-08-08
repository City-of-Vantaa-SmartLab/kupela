import tabs from '../../JSON/tabs';
import { SHOW_CURRENT_TABCONTENT } from './actions';

//gets the url, splits it until the parameters needed are left.
var str = window.location.href;
var res = str.split("#/");
res = res[1].split("/");
const initialState = tabs[tabs.findIndex((item) => item.nameId === res[2])];
export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CURRENT_TABCONTENT:
            return action.content;
        default:
            return state;
    }
};