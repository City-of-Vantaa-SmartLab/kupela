export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';
export const SHOW_CURRENT_TABCONTENT = 'SHOW_CURRENT_TABCONTENT';
export const SHOW_CURRENT_SUB_TABCONTENT = 'SHOW_CURRENT_SUB_TABCONTENT';
export const SET_CURRENT_SUB_TAB = 'SET_CURRENT_SUB_TAB';
export const CLICKED_SUBITEM = 'CLICKED_SUBITEM';
export const CHANGE_TEMPLATE = 'CHANGE_TEMPLATE';
export const RETURN_ORIGINAL_TEMPLATE = 'RETURN_ORIGINAL_TEMPLATE';
export const SET_AS_MAIN_CONTENT = 'SET_AS_MAIN_CONTENT';
export const SET_MENU = 'SET_MENU';
export const SET_INFO_SHARED = 'SET_INFO_SHARED';
export const ADD_SUBITEM_FILTER = 'ADD_SUBITEM_FILTER';
export const RESET_FILTER_ARRAY = 'RESET_FILTER_ARRAY';
export const RESET_SUB_TABCONTENT = 'RESET_SUB_TABCONTENT';
export const RETURN_MAP_TYPE = 'RETURN_MAP_TYPE';
export const ADD_CAROUSEL = 'ADD_CAROUSEL';
export const SHARE_BUTTON_CLICKED = 'SHARE_BUTTON_CLICKED';
export const ADD_SHAREABLE_ITEM = 'ADD_SHAREABLE_ITEM';

export function setCurrentTab(id) {
    return {
        type: SET_CURRENT_TAB,
        id
    };
}

export function showCurrentTabcontent(content) {
    return {
        type: SHOW_CURRENT_TABCONTENT,
        content
    };
}

export function changeCurrentTemplate(id, template, content) {
    return {
        type: CHANGE_TEMPLATE,
        templateType: template,
        templateProps: {
            id,
            content
        }
    }
}

export function setOriginalTemplate() {
    return {
        type: RETURN_ORIGINAL_TEMPLATE
    }
}

export function selectAsMainContent(id, content) {
    return {
        type: SET_AS_MAIN_CONTENT,
        templateProps: {
            id,
            content
        }
    }
}

export function setMenu(components) {
    return {
        type: SET_MENU,
        menuProps: components
    }
}

export function setCurrentSubTab(subid) {
    return {
        type: SET_CURRENT_SUB_TAB,
        subid
    }
}

export function showSubTabcontent(subcontent) {
    return {
        type: SHOW_CURRENT_SUB_TABCONTENT,
        subcontent
    }
}

export function resetSubtabToInitialstate() {
    return {
        type: RESET_SUB_TABCONTENT
    }
}

export function setCurrentSubItem(subitemId) {
    return {
        type: CLICKED_SUBITEM,
        subitemId
    }
}

export function addNewFilter(id, subitem, itemType) {
    return {
        type: ADD_SUBITEM_FILTER,
        filters: {
            id,
            subitem,
            itemType
        }
    }
}

export function getMapType(mapType) {
    return {
        type: RETURN_MAP_TYPE,
        mapType
    }
}

export function resetFiltersToNull() {
    return {
        type: RESET_FILTER_ARRAY
    }
}

export function addCarousel(subitem) {
    return {
        type: ADD_CAROUSEL,
        subitem
    }
}

export function shareInformation(id, content) {
    return {
        type: SET_INFO_SHARED,
        id,
        content
    }
}

export function setSharedButton(id) {
    return {
        type: SHARE_BUTTON_CLICKED,
        id
    }
}

export function addShareableItem(id) {
    return {
        type: ADD_SHAREABLE_ITEM,
        id
    }
}