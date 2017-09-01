import { SET_MISSIONS, ADD_MISSION } from './actions';

const initialState = {
  missiondata: []
};

export default(state = initialState, action) => {
    switch(action.type) {
        case SET_MISSIONS:
          return {
            ...state,
            missiondata: action.missions
          }
        case ADD_MISSION:
          console.log("Adding mission");
          return {
            ...state,
            missiondata: state.missiondata.concat(action.mission)
          }
        default:
            return state;
    }
};
