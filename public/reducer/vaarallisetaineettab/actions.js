import vaarallisetaineettab from '../../JSON/vaarallisetaineettab';
export const LOAD_VAARALLISETAINEETTAB = 'LOAD_VAARALLISETAINEETTAB';

export function getVaarallisetaineettab() {
    return {
        type: LOAD_VAARALLISETAINEETTAB,
        vaarallisetaineettab
    }
}