import missions from '../../JSON/missions';

export const SET_MISSIONS = "SET_MISSIONS";

export function getMissions() {
  return {
    type: SET_MISSIONS,
    missions
  };
}
