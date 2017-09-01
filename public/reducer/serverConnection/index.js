import { combineReducers } from 'redux';
import servermessages from './servermessages';
import dataRequests from './dataRequests';
import ozCommands from './ozCommands';

export default combineReducers ({
  servermessages,
  dataRequests,
  ozCommands
});
