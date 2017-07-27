import maps from '../../JSON/maps';
export const LOAD_3D_MAPS = 'LOAD_3D_MAPS';

export function get3DMaps() {
    return {
        type: LOAD_3D_MAPS,
        maps
    }
}