export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';

export function setCurrentTab(id) {
    return {
        type: SET_CURRENT_TAB,
        id
    };
}