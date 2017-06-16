import { LOAD_ROAD_CAMS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ROAD_CAMS:
            return action.roadcams;
        default:
            return state;
    }
}