import henkilosto from '../../JSON/turvallisuushenkilosto';
export const LOAD_HENKILOSTO = 'LOAD_HENKILOSTO';

export function getHenkilosto() {
    return {
        type: LOAD_HENKILOSTO,
        henkilosto
    }
}