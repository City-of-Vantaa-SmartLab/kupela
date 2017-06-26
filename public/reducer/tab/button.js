import { SHARE_BUTTON_CLICKED } from './actions';

const initialState = {
        label: "Jaa johtoautoon",
        id: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHARE_BUTTON_CLICKED:
            return Object.assign({}, state, {
                label: action.label,
                id: action.id
            });
        default:
            return state;
    }
}