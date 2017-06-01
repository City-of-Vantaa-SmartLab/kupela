import { combineReducers } from 'redux';
import id from './id';
import content from './content';
import subcontent from './subcontent';
import subid from './subid';

export default combineReducers ({
    id,
    content,
    subcontent,
    subid
});