export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export function showCurrentPage(page){
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}