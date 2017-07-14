import floorplans from '../../JSON/floorplans';
export const LOAD_FLOORPLANS = 'LOAD_FLOORPLANS';

export function getFloorplans() {
    return {
        type: LOAD_FLOORPLANS,
        floorplans
    }
}