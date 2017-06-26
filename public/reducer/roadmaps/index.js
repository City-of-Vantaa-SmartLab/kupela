import { LOAD_ROADMAPS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ROADMAPS:
            return action.roadmaps;
        default:
            return state;
    }
}