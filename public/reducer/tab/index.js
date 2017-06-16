import { combineReducers } from 'redux';
import id from './id';
import content from './content';
import subid from './subid';
import subcontent from './subcontent';
import subitem from './subitem';
import subitem_id from './subitem_id';
import template from './template';
import button from './button';
import shared_info from './shared_info';

export default combineReducers ({
    id,
    content,
    subid,
    subcontent,
    subitem_id,
    subitem,
    template,
    button,
    shared_info
});