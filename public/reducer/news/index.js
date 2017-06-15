import { LOAD_NEWS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NEWS:
            return action.news;
        default:
            return state;
    }
}