import { CHANGE_TEXT } from './actions';

const initialState = {
  currentText: '',
  i: 0
};

export default (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TEXT:
            state.i++;
            return Object.assign({}, state, {currentText: action.text + state.i});
            /*return [
              ...state,
              state.currentText: action.text
            ];*/
        default:
            return state;
    }
}
