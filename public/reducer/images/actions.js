import images from '../../JSON/img';
export const LOAD_IMAGES = 'LOAD_IMAGES';

export function getImages() {
    return {
        type: LOAD_IMAGES,
        images
    }
}