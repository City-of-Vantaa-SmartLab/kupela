export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';
export const SHOW_CURRENT_TABCONTENT = 'SHOW_CURRENT_TABCONTENT';
export const SHOW_CURRENT_SUB_TABCONTENT = 'SHOW_CURRENT_SUB_TABCONTENT';
export const SET_CURRENT_SUB_TAB = 'SET_CURRENT_SUB_TAB';
export const CLICKED_SUBITEM = 'CLICKED_SUBITEM';
export const SET_AS_MAIN_SUBCONTENT = 'SET_AS_MAIN_SUBCONTENT';

export function setCurrentTab(id) {
    return {
        type: SET_CURRENT_TAB,
        id
    };
}

export function showCurrentTabcontent(content) {
    return {
        type: SHOW_CURRENT_TABCONTENT,
        content
    };
}

export function setCurrentSubTab(subid) {
    return {
        type: SET_CURRENT_SUB_TAB,
        subid
    }
}

export function showSubTabcontent(subcontent) {
    return {
        type: SHOW_CURRENT_SUB_TABCONTENT,
        subcontent
    }
}

export function setCurrentSubItem(subitemId) {
    return {
        type: CLICKED_SUBITEM,
        subitemId
    }
}

export function showMainSubContent(subitem) {
    return {
        type: SET_AS_MAIN_SUBCONTENT,
        subitem
    }
}