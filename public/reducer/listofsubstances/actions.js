import listofsubstances from '../../JSON/listofsubstances';
export const LOAD_LIST_OF_SUBSTANCES = 'LOAD_LIST_OF_SUBSTANCES';

export function getListofSubstances() {
    return {
        type: LOAD_LIST_OF_SUBSTANCES,
        list: listofsubstances
    }
}