import aerialviews from '../../JSON/aerialviews';
export const LOAD_AERIAL_VIEWS = 'LOAD_AERIAL_VIEWS';

export function getAerialViews() {
    return {
        type: LOAD_AERIAL_VIEWS,
        aerialviews
    }
}