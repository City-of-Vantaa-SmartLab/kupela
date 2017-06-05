export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export function showCurrentModal(id) {
    return {
        type: SHOW_MODAL,
        id
    }
}