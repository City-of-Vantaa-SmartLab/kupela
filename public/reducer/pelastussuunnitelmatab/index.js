import { LOAD_PELASTUSSUUNNITELMATAB } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PELASTUSSUUNNITELMATAB:
            return action.pelastussuunnitelmatab;
        default:
            return state;
    }
}