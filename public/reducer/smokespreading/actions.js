import smokespreading from '../../JSON/smokespreading';
export const LOAD_SMOKESPREADING = 'LOAD_SMOKESPREADING';

export function getSmokespreading() {
    return {
        type: LOAD_SMOKESPREADING,
        smokespreading
    }
}