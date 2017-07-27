import roadmaps from '../../JSON/roadmaps';
export const LOAD_ROADMAPS = 'LOAD_ROADMAPS';

export function getRoadmaps() {
    return {
        type: LOAD_ROADMAPS,
        roadmaps
    }
}