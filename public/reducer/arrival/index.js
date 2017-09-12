import { LOAD_ARRIVALS, CHANGE_ARRIVAL } from './actions';

const initialState = {
  arrivallist: [],
  currentArrival: 0
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ARRIVALS:
          return {
            ...state,
            arrivallist: action.arrivals,
            currentArrival: 1
          }
        case CHANGE_ARRIVAL:
          return {
            ...state,
            currentArrival: 2
          }
        default:
            return state;
    }
}
