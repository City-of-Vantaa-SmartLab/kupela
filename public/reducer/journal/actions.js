export const JOURNAL_INPUT_CHANGE = "JOURNAL_INPUT_CHANGE";
export const NEW_JOURNAL_ENTRY = "NEW_JOURNAL_ENTRY";

export function changeInputValue(textvalue) {
  return {
    type: JOURNAL_INPUT_CHANGE,
    textvalue
  };
}

export function addJournalEntry(data) {
  return {
    type: NEW_JOURNAL_ENTRY,
    sender: data.sender,
    time: data.time,
    message: data.message
  };
}
