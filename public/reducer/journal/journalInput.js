import { JOURNAL_INPUT_CHANGE } from './actions';
import { JOURNAL_INPUT_BUTTON_CLICKED } from '../serverConnection/actions';

const initialState = {
  inputValue: "",
  inputSent: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case JOURNAL_INPUT_CHANGE:
      var newvalue = action.textvalue;
      return {
        ...state,
        inputValue: newvalue,
        inputSent: false
      }
    case JOURNAL_INPUT_BUTTON_CLICKED:
      return {
        ...state,
        inputSent: true,
        inputValue: ""
      }
    default:
      return state;
  }
}
