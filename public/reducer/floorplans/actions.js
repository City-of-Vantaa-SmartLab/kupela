import floorplans from '../../JSON/rescuefloorplan';
export const LOAD_FLOORPLANS = 'LOAD_FLOORPLANS';

export function getFloorplans() {
    return {
        type: LOAD_FLOORPLANS,
        floorplans
    }
}