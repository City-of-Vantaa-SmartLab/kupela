import { SHARE_BUTTON_CLICKED } from './actions';

const initialState = {
    sharedProps: {
        label: "Jaa johtoautoon",
        id: null
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHARE_BUTTON_CLICKED:
            return Object.assign({}, state, {
                sharedProps: action.sharedProps
            });
        default:
            return state;
    }
}