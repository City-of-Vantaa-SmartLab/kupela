import { CHANGE_TEMPLATE, RETURN_ORIGINAL_TEMPLATE, SET_AS_MAIN_CONTENT, SET_MENU } from './actions';

const initialState = {
    templateType: null,
    templateProps: {},
    menuProps: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AS_MAIN_CONTENT:
            return Object.assign({}, state, {
                templateProps: action.templateProps
            });
        case SET_MENU:
            return Object.assign({}, state, {
                menuProps: action.menuProps
            });
        case CHANGE_TEMPLATE:
            return Object.assign({}, state, {
                templateType: action.templateType,
                templateProps: action.templateProps
            });
        case RETURN_ORIGINAL_TEMPLATE:
            return initialState;
        default:
            return state;
    }
};