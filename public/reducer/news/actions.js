import news from '../../JSON/news';
export const LOAD_NEWS = 'LOAD_NEWS';
export const SHOW_ALL_NEWS = "SHOW_ALL_NEWS";
export const SHOW_PRIONEWS_ONLY = "SHOW_PRIONEWS_ONLY";
export const SHARED_NEWS_ADDED = "SHARED_NEWS_ADDED";

export function showAllNews() {
    return {
        type: SHOW_ALL_NEWS
    }
}

export function showPrioNews() {
    return {
        type: SHOW_PRIONEWS_ONLY
    }
}

export function getNews() {
    return {
        type: LOAD_NEWS,
        news
    }
}

export function addSharedNews(news) {
  return {
    type: SHARED_NEWS_ADDED,
    news
  }
}
