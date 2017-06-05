export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';
export const SHOW_CURRENT_TABCONTENT = 'SHOW_CURRENT_TABCONTENT';
export const SHOW_CURRENT_SUB_TABCONTENT = 'SHOW_CURRENT_SUB_TABCONTENT';
export const SET_CURRENT_SUB_TAB = 'SET_CURRENT_SUB_TAB';

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
