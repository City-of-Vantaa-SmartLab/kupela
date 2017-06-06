export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

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