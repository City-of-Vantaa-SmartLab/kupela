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
          //state.missiondata = action.missions;
          //return state;
        case ADD_MISSION:
          console.log("Adding mission");
          //var newmissions = state.missions;
          //newmissions.push(action.mission);
          return {
            ...state,
            missiondata: state.missiondata.concat(action.mission)
          }
          //return Object.assign({}, state, {missions: newmissions});
        default:
            return state;
    }
};
