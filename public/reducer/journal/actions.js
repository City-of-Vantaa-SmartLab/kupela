export const JOURNAL_INPUT_CHANGE = "JOURNAL_INPUT_CHANGE";
export const NEW_JOURNAL_ENTRY = "NEW_JOURNAL_ENTRY";
export const GET_OLD_JOURNAL = "GET_OLD_JOURNAL";
export const ADD_OLD_JOURNAL = "ADD_OLD_JOURNAL";

export function changeInputValue(textvalue) {
  return {
    type: JOURNAL_INPUT_CHANGE,
    textvalue
  };
}

export function getOldJournal() {
  return {
    type: GET_OLD_JOURNAL
  }
}

export function addOldJournal(entries) {
  return {
    type: ADD_OLD_JOURNAL,
    entries
  }
}

export function addJournalEntry(data) {
  return {
    type: NEW_JOURNAL_ENTRY,
    sender: data.sender,
    time: data.time,
    message: data.message
  };
}
