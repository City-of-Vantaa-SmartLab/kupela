import { combineReducers } from 'redux';
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
import serverConnection from './serverConnection';
import textvalues from './textvalues';
import missions from './missions';
import mission from './mission';
import user from './user';
import journal from './journal';
import arrival from './arrival';
import frontpagemap from './frontpagemap';


//based on: https://scotch.io/courses/getting-started-with-react-and-redux/
export default combineReducers({
    missions,
    mission,
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
    serverConnection,
    textvalues,
    user,
    journal,
    arrival,
    frontpagemap,
    ozadmin
});
