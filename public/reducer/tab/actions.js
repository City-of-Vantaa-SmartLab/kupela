export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';
export const SHOW_CURRENT_TABCONTENT = 'SHOW_CURRENT_TABCONTENT';

export function setCurrentTab(id) {
    return {
        type: SET_CURRENT_TAB,
        id
    };
}

export function getCurrentTabcontent(content) {
    return {
        type: SHOW_CURRENT_TABCONTENT,
        content
    };
}