import { combineReducers } from 'redux';
import tehtavat from './tehtavat';
import tehtava from './tehtava';
import tabs from './tabs';
import tab from './tab';
import pages from './pages';
import page from './page';
import modal from './modal';
import images from './images';
import texts from './texts';
import news from './news';
import securitycams from './securitycams';
import roadcams from './roadcams';
import maps from './maps';

//code from: https://scotch.io/courses/getting-started-with-react-and-redux/
export default combineReducers({
    tehtavat,
    tehtava,
    tabs,
    tab,
    pages,
    page,
    modal,
    images,
    texts,
    news,
    securitycams,
    roadcams,
    maps
});