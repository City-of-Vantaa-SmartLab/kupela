import { SET_TABS, INIT_TAB_NEW_ITEMS, RESET_NEW_ITEMS, NEW_ITEMS_ADDED } from './actions';

const initialState = {
  tablist: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TABS:
          return {
              ...state,
              tablist: action.tabs
          }
        case INIT_TAB_NEW_ITEMS:
          var newtabs = action.tabs;
          newtabs.map((tab) => {
            tab.newitems = 0;
          });
          return {
            ...state,
            tablist: newtabs
          }
        case NEW_ITEMS_ADDED:
          state.tablist.map((tab) => {
            if(tab.nameId === action.id) {
              tab.newitems += action.noOfItems;
            }
          });
          return {
            ...state
          }
        case RESET_NEW_ITEMS:
          state.tablist.map((tab) => {
            if(tab.nameId === action.id) {
              tab.newitems = 0;
            }
          });
          return {
            ...state
          }
        default:
            return state;
    }
};
