import { SET_USER } from './actions';

const initialState = {
  usertype: "default"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            state.usertype = action.usertype;
            return state;
        default:
            return state;
    }
};
