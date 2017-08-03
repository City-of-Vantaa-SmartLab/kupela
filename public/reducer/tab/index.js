import { combineReducers } from 'redux';
import id from './id';
import content from './content';
import subid from './subid';
import subcontent from './subcontent';
import subitem_id from './subitem_id';
import template from './template';
import buttons from './buttons';
import shared_info from './shared_info';
import filter from './filter';
import maptype from './maptype';
import carousel from './carousel';

export default combineReducers ({
    id,
    content,
    subid,
    subcontent,
    subitem_id,
    template,
    buttons,
    shared_info,
    filter,
    maptype,
    carousel
});