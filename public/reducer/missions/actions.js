import missions from '../../JSON/missions';

export const SET_MISSIONS = "SET_MISSIONS";
export const ADD_MISSION = "ADD_MISSION";

export function getMissions() {
  return {
    type: SET_MISSIONS,
    missions
  };
}

export function addMission(mission) {
  return {
    type: ADD_MISSION,
    mission
  };
}
