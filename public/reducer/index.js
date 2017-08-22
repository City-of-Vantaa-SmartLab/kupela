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
import streetviews from './streetviews';
import firealarms from './firealarms';
import sprinklers from './sprinklers';
import aerialviews from './aerialviews';
import roadmaps from './roadmaps';
import gatheringplaces from './gatheringplaces';
import kohdekortit from './kohdekortit';
import floorplans from './floorplans';
import henkilosto from './turvallisuushenkilosto';
import rescueplans from './rescueplans';
import contacts from './contacts';
import dangerfloorplans from './dangerfloorplans';
import listofsubstances from './listofsubstances';
import chemicalcards from './chemicalcards';
import smokespreading from './smokespreading';
import escape from './escape';
import pelastussuunnitelmatab from './pelastussuunnitelmatab';
import vaarallisetaineettab from './vaarallisetaineettab';

import ozadmin from './ozadmin';


//based on: https://scotch.io/courses/getting-started-with-react-and-redux/
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
    maps,
    streetviews,
    firealarms,
    sprinklers,
    aerialviews,
    roadmaps,
    gatheringplaces,
    kohdekortit,
    floorplans,
    henkilosto,
    rescueplans,
    contacts,
    dangerfloorplans,
    listofsubstances,
    chemicalcards,
    smokespreading,
    escape,
    pelastussuunnitelmatab,
    vaarallisetaineettab,
    ozadmin
});
