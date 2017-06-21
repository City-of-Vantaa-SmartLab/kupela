import { LOAD_SPRINKLERS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SPRINKLERS:
            return action.sprinklers;
        default:
            return state;
    }
}