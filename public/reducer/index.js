import { combineReducers } from 'redux';
import tehtavat from './tehtavat';
import tehtava from './tehtava';
import tabs from './tabs';
import tab from './tab';

//code from: https://scotch.io/courses/getting-started-with-react-and-redux/
export default combineReducers({
    tehtavat,
    tehtava,
    tabs,
    tab
});