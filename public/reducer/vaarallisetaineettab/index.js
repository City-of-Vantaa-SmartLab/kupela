import { LOAD_VAARALLISETAINEETTAB } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_VAARALLISETAINEETTAB:
            return action.vaarallisetaineettab;
        default:
            return state;
    }
}