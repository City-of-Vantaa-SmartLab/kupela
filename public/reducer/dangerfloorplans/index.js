import { LOAD_DANGER_FLOORPLANS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DANGER_FLOORPLANS:
            return action.floorplans;
        default:
            return state;
    }
}