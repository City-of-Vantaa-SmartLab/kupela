import { SET_CURRENT_TAB } from './actions';
import tabs from '../../JSON/tabs';


//gets the url, splits it until the parameters needed are left.
var str = window.location.href;
var res = str.split("#/");
res = res[1].split("/");
var index=tabs[0].nameId;
if(tabs.findIndex((item) => item.nameId === res[2])!=-1){
    index=res[2];
}
const initialState = index;
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TAB:
            var str = window.location.href;
            var res = str.split("#/");{console.log(props)}
            res = res[1].split("/");
            var index=action.id;
            if(tabs.findIndex((item) => item.nameId === res[2])!=-1){
                index=res[2];
            }
            return index;
        default:
            return state;
    }
};