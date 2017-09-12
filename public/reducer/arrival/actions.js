import arrivals from '../../JSON/arrivals';
export const LOAD_ARRIVALS = 'LOAD_ARRIVALS';
export const CHANGE_ARRIVAL = 'CHANGE_ARRIVAL';

export function getArrivals() {
    return {
        type: LOAD_ARRIVALS,
        arrivals
    }
}

export function changeArrival() {
  return {
    type: CHANGE_ARRIVAL
  }
}
