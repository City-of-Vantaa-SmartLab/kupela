import tabs from '../../JSON/tabs';

export const SET_TABS = 'SET_TABS';

export function setTabs(){
    return {
        type: SET_TABS,
        tabs
    };
}