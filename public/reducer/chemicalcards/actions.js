import chemicalcards from '../../JSON/chemicalcards';
export const LOAD_CHEMICALCARDS = 'LOAD_CHEMICALCARDS';

export function getChemicalcards() {
    return {
        type: LOAD_CHEMICALCARDS,
        chemicalcards
    }
}