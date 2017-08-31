export const SET_USER = "SET_USER";

export function setUser(usertype){
  console.log("User type set: " + usertype);
  return {
    type: SET_USER,
    usertype
  };
}
