import missions from '../../JSON/missions';

export const SET_MISSIONS = "SET_MISSIONS";
export const ADD_MISSION = "ADD_MISSION";
export const GET_OLD_MISSIONS = "GET_OLD_MISSIONS";
export const ADD_OLD_MISSIONS = "ADD_OLD_MISSIONS";

export function getMissions() {
  return {
    type: SET_MISSIONS,
    missions
  }
}

export function getOldMissions() {
  return {
    type: GET_OLD_MISSIONS,
  }
}

export function addOldMissions(missions) {
  return {
    type: ADD_OLD_MISSIONS,
    missions
  }
}

export function addMission(mission) {
  return {
    type: ADD_MISSION,
    mission
  }
}
