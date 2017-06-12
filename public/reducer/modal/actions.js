export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SELECT_AS_MODAL_CONTENT = 'SELECT_AS_MODAL_CONTENT';
export const SET_MODAL_MENU = 'SET_MODAL_MENU';

export function showCurrentModal(id, type, content) {
    return {
        type: SHOW_MODAL,
        modalType: type,
        modalProps: {
            id,
            content
        }
    }
}

export function hideModal() {
    return {
        type: HIDE_MODAL
    }
}

export function setModalMenu(components) {
    return {
        type: SET_MODAL_MENU,
        modalMenu: components
    }
}

export function selectModalcontent(id, content) {
    return {
        type: SELECT_AS_MODAL_CONTENT,
        modalProps: {
            id,
            content
        }
    }
}