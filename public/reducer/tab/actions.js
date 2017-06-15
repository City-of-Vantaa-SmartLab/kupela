export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';
export const SHOW_CURRENT_TABCONTENT = 'SHOW_CURRENT_TABCONTENT';
export const SHOW_CURRENT_SUB_TABCONTENT = 'SHOW_CURRENT_SUB_TABCONTENT';
export const SET_CURRENT_SUB_TAB = 'SET_CURRENT_SUB_TAB';
export const CLICKED_SUBITEM = 'CLICKED_SUBITEM';
export const SET_AS_MAIN_SUBCONTENT = 'SET_AS_MAIN_SUBCONTENT';
export const SET_SUBITEM_MENU = 'SET_SUBITEM_MENU';
export const CHANGE_TEMPLATE = 'CHANGE_TEMPLATE';
export const RETURN_ORIGINAL_TEMPLATE = 'RETURN_ORIGINAL_TEMPLATE';
export const SET_AS_MAIN_CONTENT = 'SET_AS_MAIN_CONTENT';
export const SET_MENU = 'SET_MENU';


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

export function setCurrentSubItem(subitemId) {
    return {
        type: CLICKED_SUBITEM,
        subitemId
    }
}

export function showSelectedSubContent(subitem) {
    return {
        type: SET_AS_MAIN_SUBCONTENT,
        subitem
    }
}