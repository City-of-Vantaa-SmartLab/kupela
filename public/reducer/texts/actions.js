import texts from '../../JSON/texts';
export const LOAD_TEXTS = 'LOAD_TEXTS';
export const SHOW_ALL_TEXTS = "SHOW_ALL_TEXTS";
export const SHOW_PRIO_ONLY = "SHOW_PRIO_ONLY";
export const SHARED_TEXT_ADDED = "SHARED_TEXT_ADDED";

export function getTexts() {
    return {
        type: LOAD_TEXTS,
        texts
    }
}

export function showAllTexts() {
    return {
        type: SHOW_ALL_TEXTS
    }
}

export function showPrioTexts() {
    return {
        type: SHOW_PRIO_ONLY
    }
}

export function addSharedText(text) {
  return {
    type: SHARED_TEXT_ADDED,
    text
  }
}
