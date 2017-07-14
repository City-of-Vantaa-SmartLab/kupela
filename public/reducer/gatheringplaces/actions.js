import gatheringplaces from '../../JSON/gatheringplaces';
export const LOAD_GATHER_PLACES = 'LOAD_GATHER_PLACES';

export function getGatherPlaces() {
    return {
        type: LOAD_GATHER_PLACES,
        places: gatheringplaces
    }
}