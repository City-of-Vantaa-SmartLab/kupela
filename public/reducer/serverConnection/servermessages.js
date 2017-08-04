import {combineReducers} from 'redux';
import {UPDATE_MESSAGE, ADD_MESSAGE, ADD_RESPONSE} from './actions';

const initialState = {
  currentMessage: '',
  messages: []
};

export default (state = initialState, action) => {
  function messages(currentMessages = initialState.messages, action) {
    const messages = currentMessages.map(message => Object.assign({}, message));

    switch(action.type) {
      case ADD_RESPONSE:
        messages.push(Object.assign({}, action.message));
        break;
      case ADD_MESSAGE:
        console.log("Pushing message");
        messages.push({id: messages.length + 1, text: action.message});
    }

    return messages;
  }

  function currentMessage(currentMessage = initialState.currentMessage, action) {
    switch(action.type) {
      case UPDATE_MESSAGE:
        return action.message;
      case ADD_MESSAGE:
        return '';
      default:
        return currentMessage;
    }
  }

  return combineReducers({currentMessage, messages});
}
