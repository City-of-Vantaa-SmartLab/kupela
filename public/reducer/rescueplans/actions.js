import rescueplans from '../../JSON/rescueplans';
export const LOAD_RESCUEPLANS = 'LOAD_RESCUEPLANS';

export function getRescueplans() {
    return {
        type: LOAD_RESCUEPLANS,
        rescueplans
    }
}