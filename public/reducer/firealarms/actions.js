import firealarms from '../../JSON/firealarms';
export const LOAD_FIREALARMS = 'LOAD_FIREALARMS';

export function getFirealarms() {
    return {
        type: LOAD_FIREALARMS,
        firealarms
    }
}