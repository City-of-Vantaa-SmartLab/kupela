import kohdekortit from '../../JSON/kohdekortit';
export const LOAD_KOHDEKORTIT = 'LOAD_KOHDEKORTIT';

export function getKohdekortit() {
    return {
        type: LOAD_KOHDEKORTIT,
        kohdekortit
    }
}