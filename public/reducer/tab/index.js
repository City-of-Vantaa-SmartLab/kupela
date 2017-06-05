import { combineReducers } from 'redux';
import id from './id';
import content from './content';
import subid from './subid';
import subcontent from './subcontent';

export default combineReducers ({
    id,
    content,
    subid,
    subcontent
});