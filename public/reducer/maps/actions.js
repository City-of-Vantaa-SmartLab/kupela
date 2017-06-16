import maps from '../../JSON/maps';
export const LOAD_MAPS = 'LOAD_MAPS';

export function getMaps() {
    return {
        type: LOAD_MAPS,
        maps
    }
}