import pages from '../../JSON/pages';

export const SET_PAGES = 'SET_PAGES';

export function getPages() {
    return {
        type: SET_PAGES,
        pages
    };
}