import { AUTH_SET_LOGIN, AUTH_SET_SIGN_OUT, AUTH_SET_USER } from './actions';

const initialState = {};

//code from: https://medium.com/@MattiaManzati/tips-to-handle-authentication-in-redux-4d596e11bb21
export default (state = initialState, action) => {
    switch(action.type) {
        case AUTH_SET_LOGIN:
            return {
                ...state,
                token: action.login
            };
        case AUTH_SET_SIGN_OUT:
            return {};
        case AUTH_SET_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}