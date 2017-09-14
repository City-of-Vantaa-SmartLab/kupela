import { SET_MISSIONS, ADD_MISSION, ADD_OLD_MISSIONS } from './actions';

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
        case ADD_OLD_MISSIONS:
          return {
            ...state,
            missiondata: action.missions.concat(state.missiondata)
          }
        case ADD_MISSION:
          console.log("Adding mission");
          state.missiondata.unshift(action.mission);
          return {
            ...state,
            missiondata: state.missiondata
          }
        default:
            return state;
    }
};
