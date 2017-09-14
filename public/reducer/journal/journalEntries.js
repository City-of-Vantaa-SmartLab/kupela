import { NEW_JOURNAL_ENTRY, ADD_OLD_JOURNAL } from './actions';

const initialState = {
  entries: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_OLD_JOURNAL:
      return {
        ...state,
        entries: action.entries
      }
    case NEW_JOURNAL_ENTRY:
      var newentry = {"sender": action.sender, "time": action.time, "message": action.message};
      console.log("New messages received" + newentry.sender + " " + newentry.time + " " + newentry.message);
      console.log("No of entries: " + state.entries.length);
      state.entries.unshift(newentry);
      return {
        ...state,
        entries: state.entries
      }
    default:
      return state;
  }
}
