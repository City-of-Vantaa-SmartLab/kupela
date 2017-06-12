import { SHOW_MODAL, HIDE_MODAL, SELECT_AS_MODAL_CONTENT, SET_MODAL_MENU } from './actions';

const initialState = {
    modalType: null,
    modalProps: {},
    modalMenu: {}
};

//code from: https://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions/35641680
export default (state = initialState, action) => {
    switch(action.type) {
        case SHOW_MODAL:
            return {
                modalType: action.modalType,
                modalProps: action.modalProps
            };
        case SELECT_AS_MODAL_CONTENT:
            return Object.assign({}, state, {
                modalProps: action.modalProps
        });
        case SET_MODAL_MENU:
            return Object.assign({}, state, {
                modalMenu: action.modalMenu
            });
        case HIDE_MODAL:
            return initialState;
        default:
            return state;
    }
}