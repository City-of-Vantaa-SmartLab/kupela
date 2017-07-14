import escape from '../../JSON/escape';
export const LOAD_ESCAPE = 'LOAD_ESCAPE';

export function getEscape() {
    return {
        type: LOAD_ESCAPE,
        escape
    }
}