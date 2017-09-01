import images from '../../JSON/img';
export const LOAD_IMAGES = 'LOAD_IMAGES';
export const SHOW_ALL_IMAGES = "SHOW_ALL_IMAGES";
export const SHOW_PRIOIMG_ONLY = "SHOW_PRIOIMG_ONLY";

export function showAllImages() {
    return {
        type: SHOW_ALL_IMAGES
    }
}

export function showPrioImages() {
    return {
        type: SHOW_PRIOIMG_ONLY
    }
}

export function getImages() {
    return {
        type: LOAD_IMAGES,
        images
    }
}
