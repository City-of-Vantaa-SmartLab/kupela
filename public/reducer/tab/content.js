import tabs from '../../JSON/tabs';
import { SHOW_CURRENT_TABCONTENT } from './actions';

//gets the url, splits it until the parameters needed are left.
var str = window.location.href;
var res = str.split("#/");
res = res[1].split("/");
var index=0;
if(tabs.findIndex((item) => item.nameId === res[2])!=-1){
    index=tabs.findIndex((item) => item.nameId === res[2]);
}
    const initialState = tabs[index];
export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CURRENT_TABCONTENT:
            return action.content;
        default:
            return state;
    }
};