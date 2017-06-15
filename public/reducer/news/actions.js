import news from '../../JSON/news';
export const LOAD_NEWS = 'LOAD_NEWS';

export function getNews() {
    return {
        type: LOAD_NEWS,
        news
    }
}