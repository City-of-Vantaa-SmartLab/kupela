import tabs from '../../JSON/tabs';

export const SET_TABS = 'SET_TABS';
export const INIT_TAB_NEW_ITEMS = 'INIT_TAB_NEW_ITEMS';
export const NEW_ITEMS_ADDED = "NEW_ITEMS_ADDED";
export const RESET_NEW_ITEMS = "RESET_NEW_ITEMS";

export function getTabs(){
    return {
        type: SET_TABS,
        tabs
    };
}

export function initNewTabs() {
  return {
    type: INIT_TAB_NEW_ITEMS,
    tabs
  }
}

export function addNewItems(id, noOfItems) {
  return {
    type: NEW_ITEMS_ADDED,
    id,
    noOfItems
  }
}

export function resetNewItems(id) {
  return {
    type: RESET_NEW_ITEMS,
    id
  }
}
