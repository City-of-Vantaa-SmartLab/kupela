import { LOAD_FLOORPLANS, CHANGE_URL } from './actions';

const initialState = {
  floorplans: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_FLOORPLANS:
          return {
            ...state,
            floorplans: action.floorplans
          }
        case CHANGE_URL:
          state.floorplans.map((plan) =>
            plan.nameId == action.plantype ? (
              plan.url = action.url
            ) : (null)
          );
          return state;
        default:
            return state;
    }
}
