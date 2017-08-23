import pelastussuunnitelmatab from '../../JSON/pelastussuunnitelmatab';
export const LOAD_PELASTUSSUUNNITELMATAB = 'LOAD_PELASTUSSUUNNITELMATAB';

export function getPelastussuunnitelmatab() {
    return {
        type: LOAD_PELASTUSSUUNNITELMATAB,
        pelastussuunnitelmatab
    }
}