export const SEND_MESSAGE = "SEND_MESSAGE";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";

export function sendMessage(message) {
  return { type: SEND_MESSAGE, message };
}

export function receiveResponse(message) {
  return { type: RECEIVE_RESPONSE, message };
}
