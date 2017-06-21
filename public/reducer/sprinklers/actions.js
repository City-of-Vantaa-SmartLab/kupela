import sprinklers from '../../JSON/sprinklers';
export const LOAD_SPRINKLERS = 'LOAD_SPRINKLERS';

export function getSprinklers() {
    return {
        type: LOAD_SPRINKLERS,
        sprinklers
    }
}