import { CHANGE_TEXT } from './actions';

const initialState = {
  currentText: '',
  allTexts: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TEXT:

            if(state.currentText.length > 0) {
              state.allTexts.push(state.currentText);
            }
            state.currentText = action.text;
            console.log(state.currentText);
            return state;
        default:
            return state;
    }
}
