import texts from '../../JSON/texts';
export const LOAD_TEXTS = 'LOAD_TEXTS';

export function getTexts() {
    return {
        type: LOAD_TEXTS,
        texts
    }
}