import missions from '../../JSON/missions';

export const SET_CURRENT_MISSION = 'SET_CURRENT_MISSION';
export const SET_MISSION_PROFILE = 'SET_MISSION_PROFILE';

//code from: https://scotch.io/courses/getting-started-with-react-and-redux/
export function getMissionProfile(id) {
    return dispatch => {
      missions.map((c, i) => {
        if(i+1 == id) {
          var profile = c;
          dispatch(setMissionProfile(profile));
        }
      }


      );
    };
}

export function setMissionProfile(profile) {
    return {
        type: SET_MISSION_PROFILE,
        profile,
    }
}

export function setCurrentMission(id) {
    return {
        type: SET_CURRENT_MISSION,
        id,
    };
}
