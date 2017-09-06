export const SET_USER = "SET_USER";
export const USER_INPUT_CHANGE = "USER_INPUT_CHANGE";

export function setUser(usertype){
  return {
    type: SET_USER,
    usertype
  };
}

export function changeInputValue(textvalue) {
  return {
    type: USER_INPUT_CHANGE,
    textvalue
  };
}
