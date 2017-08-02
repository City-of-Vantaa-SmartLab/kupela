import { SET_TAB_CLASS } from '../tab/actions';
import tabs from '../../JSON/tabs';

var test = new Array();

{tabs.map((c) =>
    {test=test.concat({ nameId: c.nameId, liClass: "unselected" })}
)}
const initialState = test;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TAB_CLASS:
                return state.map((c) => {
                        if(c.nameId === action.id) {
                            return Object.assign({}, c, {
                                liClass: "selected"
                            })
                        } else {
                            return Object.assign({}, c, {
                                liClass: "unselected"
                            })
                        }
                });
        default:
            return state;
    }
}