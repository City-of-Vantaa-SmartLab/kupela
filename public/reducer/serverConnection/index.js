import { combineReducers } from 'redux';
import servermessages from './servermessages';
import dataRequests from './dataRequests';
import ozCommands from './ozCommands';
import dataLoaders from './dataLoaders';

export default combineReducers ({
  servermessages,
  dataRequests,
  ozCommands
});
