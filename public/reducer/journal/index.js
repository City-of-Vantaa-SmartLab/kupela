import { combineReducers } from 'redux';
import journalInput from './journalInput';
import journalEntries from './journalEntries';

export default combineReducers ({
  journalInput,
  journalEntries
});
