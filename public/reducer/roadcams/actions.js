import roadsecurity from '../../JSON/roadsecurity';
export const LOAD_ROAD_CAMS = 'LOAD_ROAD_CAMS';

export function getRoadCams() {
    return {
        type: LOAD_ROAD_CAMS,
        roadcams: roadsecurity
    }
}