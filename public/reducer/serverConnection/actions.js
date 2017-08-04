//import servermessage from '../../JSON/servermessage';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_RESPONSE = 'ADD_RESPONSE';

export function updateMessage(message) {
  return { type: UPDATE_MESSAGE, message };
}

export function addMessage(message) {
  return { type: ADD_MESSAGE, message };
}

export function addResponse(message) {
  return { type: ADD_RESPONSE, message };
}
