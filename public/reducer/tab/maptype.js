import { RETURN_MAP_TYPE } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case RETURN_MAP_TYPE:
            return action.mapType;
        default:
            return state;
    }
}