import { LOAD_IMAGES } from '../images/actions';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_IMAGES:
            return action.images;
        default:
            return state;
    }
};
