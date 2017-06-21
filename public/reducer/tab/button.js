import { SHARE_BUTTON_CLICKED } from './actions';

const initialState = {
    label: "Jaa johtoautoon"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHARE_BUTTON_CLICKED:
            return Object.assign({}, state, {
                label: action.label
            });
        default:
            return state;
    }
}

function createShareButtonWithName(componentName = '') {
    return function (state = initialState, action) {
        const {name} = action;
        if(name !== componentName) return state;

        switch (action.type) {
            case SHARE_BUTTON_CLICKED:
                return Object.assign({}, state, {
                    label: action.label
                });
            default:
                return state;
        }
    }
}