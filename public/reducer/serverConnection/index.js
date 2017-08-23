import { combineReducers } from 'redux';
import servermessages from './servermessages';
import dataRequests from './dataRequests';

export default combineReducers ({
  servermessages,
  dataRequests
});
