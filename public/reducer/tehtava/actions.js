import { API_URL } from '../../JSON/constants';

export const SET_CURRENT_TEHTAVA = 'SET_CURRENT_TEHTAVA';
export const SET_TEHTAVA_PROFILE = 'SET_TEHTAVA_PROFILE';

//code from: https://scotch.io/courses/getting-started-with-react-and-redux/
export function getTehtavaProfile(id) {
    return dispatch =>
    fetch(`${API_URL}/people/${id}`)
        .then(res => res.json())
        .then(profile => {
            dispatch(setTehtavaProfile(profile));
        });
}

export function getTehtavaProfiili(id) {
    return dispatch =>
    fetch(`${API_URL}/people/${id}`)
        .then(res => res.json())
        .then(profile => {
            dispatch(setTehtavaProfile(profile));
        });
}

export function setTehtavaProfile(profile) {
    return {
        type: SET_TEHTAVA_PROFILE,
        profile,
    }
}

export function setCurrentTehtava(id) {
    return {
        type: SET_CURRENT_TEHTAVA,
        id,
    };
}