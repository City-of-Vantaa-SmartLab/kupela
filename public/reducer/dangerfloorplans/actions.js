import dangerfloorplans from '../../JSON/dangerfloorplans';
export const LOAD_DANGER_FLOORPLANS = 'LOAD_DANGER_FLOORPLANS';

export function getDangerFloorplans() {
    return {
        type: LOAD_DANGER_FLOORPLANS,
        floorplans: dangerfloorplans
    }
}