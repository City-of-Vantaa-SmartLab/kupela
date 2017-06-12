import { SELECT_AS_MODAL_CONTENT } from './actions';

const initialState = {
    modalProps: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_AS_MODAL_CONTENT:
            return {
                modalProps: action.modalProps
            }
    }
}