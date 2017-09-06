import { SET_USER, USER_INPUT_CHANGE } from './actions';

const initialState = {
  usertype: "default",
  uservalue: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
          return {
            ...state,
            usertype: action.usertype
          }
        case USER_INPUT_CHANGE:
          return {
            ...state,
            uservalue: action.textvalue
          }
        default:
            return state;
    }
};
