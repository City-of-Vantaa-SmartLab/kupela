import frontmaps from '../../JSON/frontpagemap';

export const FRONT_MAP_LOAD = "FRONT_MAP_LOAD";
export const SELECT_MAP = "SELECT_MAP";

export function loadFrontpageMaps() {
  return {
    type: FRONT_MAP_LOAD,
    frontmaps
  }
}

export function selectMap(index) {
  console.log("Selecting map: " + index);
  return {
    type: SELECT_MAP,
    index
  }
}
