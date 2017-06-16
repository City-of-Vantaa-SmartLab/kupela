import streetviews from '../../JSON/streetviews';
export const LOAD_STREETVIEWS = 'LOAD_STREETVIEWS';

export function getStreetViews() {
    return {
        type: LOAD_STREETVIEWS,
        streetviews
    }
}