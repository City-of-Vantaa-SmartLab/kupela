import { LOAD_3D_MAPS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_3D_MAPS:
            return action.maps;
        default:
            return state;
    }
}