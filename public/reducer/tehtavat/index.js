import { SET_TEHTAVAT } from './actions';

//code from: https://scotch.io/courses/getting-started-with-react-and-redux/getting-our-characters
const initialState = [];

export default(state = initialState, action) => {
    switch(action.type) {
        case SET_TEHTAVAT:
            return action.tehtavat;
        default:
            return state;
    }
};