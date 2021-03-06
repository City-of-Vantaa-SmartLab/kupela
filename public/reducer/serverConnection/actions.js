export const SEND_MESSAGE = "SEND_MESSAGE";
export const INIT_SOCKET = "INIT_SOCKET";
export const GET_SOME_MESSAGES = "GET_SOME_MESSAGES";
export const JOURNAL_INPUT_BUTTON_CLICKED = "JOURNAL_INPUT_BUTTON_CLICKED";
export const CONTENT_SHARED = "CONTENT_SHARED";

export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";
export const RECEIVE_DATA = "RECEIVE_DATA";

export const SEND_OZ_COMMAND = "SEND_OZ_COMMAND";

export function sendMessage(message) {
  return { type: SEND_MESSAGE, message };
}

export function initSocketVersion(isTike) {
  return { type: INIT_SOCKET, isTike };
}

export function getSomeMessages(message) {
  return { type: GET_SOME_MESSAGES, message };
}


export function sendJournalInput(input, unit) {
  return {
    type: JOURNAL_INPUT_BUTTON_CLICKED,
    input,
    unit
  }
}

export function contentShared(content, contenttype) {
  return {
    type: CONTENT_SHARED,
    content,
    contenttype
  }
}

export function receiveResponse(message) {
  return { type: RECEIVE_RESPONSE, message };
}

export function receiveData(data) {
  return { type: RECEIVE_DATA, data };
}

export function sendOzCommand(data) {
  return { type: SEND_OZ_COMMAND, data };
}
