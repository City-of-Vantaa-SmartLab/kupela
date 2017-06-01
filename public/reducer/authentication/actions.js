export const AUTH_SET_LOGIN = 'AUTH_SET_LOGIN';
export const AUTH_SET_SIGN_OUT = 'AUTH_SIGN_OUT';
export const AUTH_SET_USER = 'AUTH_SET_USER';

// code from: https://medium.com/@MattiaManzati/tips-to-handle-authentication-in-redux-4d596e11bb21
export function authSetLogin(login) {
    return {
        type: AUTH_SET_LOGIN,
        login
    }
}

export function authDiscardToken() {
    return {
        type: AUTH_SET_SIGN_OUT
    }
}

export function authSetUser(user) {
    return {
        type: AUTH_SET_USER,
        user
    }
}