import { SEND_MESSAGES_BUTTON_CLICKED } from './actions';

const initialState = {
    label: "Messages not sent"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGES_BUTTON_CLICKED:
            return Object.assign({}, state, {
                label: "Messages sent"
            });
        default:
            return state;
    }
}
