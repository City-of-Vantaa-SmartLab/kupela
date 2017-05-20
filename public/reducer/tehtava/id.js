import { SET_CURRENT_TEHTAVA } from './actions';

//code from: https://scotch.io/courses/getting-started-with-react-and-redux/
const initialState = 0;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TEHTAVA:
            return action.id;
        default:
            return state;
    }
};