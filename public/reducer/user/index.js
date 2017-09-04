import { SET_USER } from './actions';

const initialState = {
  usertype: "default"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
        return {
          ...state,
          usertype: action.usertype
        }
        default:
            return state;
    }
};
