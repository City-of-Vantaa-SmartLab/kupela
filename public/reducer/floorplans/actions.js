import floorplans from '../../JSON/rescuefloorplan';
export const LOAD_FLOORPLANS = 'LOAD_FLOORPLANS';
export const CHANGE_URL = 'CHANGE_URL';

export function getFloorplans() {
    return {
        type: LOAD_FLOORPLANS,
        floorplans
    }
}

export function changeUrl(plantype, url) {
  return {
    type: CHANGE_URL,
    plantype,
    url
  }
}
