import { combineReducers } from 'redux';
import id from './id';
import profile from './profile';

//code from: https://scotch.io/courses/getting-started-with-react-and-redux/
export default combineReducers({
    id,
    profile
});