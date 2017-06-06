import { SHOW_MODAL, HIDE_MODAL } from './actions';

const initialState = {};

//code from: https://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions/35641680
export default (state = initialState, action) => {
    switch(action.type) {
        case SHOW_MODAL:
            return {
                modalType: action.modalType,
                modalProps: action.modalProps
            };
        case HIDE_MODAL:
            return initialState;
        default:
            return state;
    }
}