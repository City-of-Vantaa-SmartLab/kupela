import { LOAD_SECURITY_CAMS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SECURITY_CAMS:
            return action.securitycams;
        default:
            return state;
    }
}