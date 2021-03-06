import { FRONT_MAP_LOAD, SELECT_MAP } from './actions';

const initialState = {
  maps: [],
  selectedMap: '2'
};

export default(state = initialState, action) => {
    switch(action.type) {
        case FRONT_MAP_LOAD:
          return {
            ...state,
            maps: action.frontmaps,
            selectedMap: '2'
          }
        case SELECT_MAP:
          return {
            ...state,
            selectedMap: action.index
          }
        default:
            return state;
    }
};
