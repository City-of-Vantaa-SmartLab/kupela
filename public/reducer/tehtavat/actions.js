import { API_URL } from '../../JSON/constants';

//code from: https://scotch.io/courses/getting-started-with-react-and-redux/getting-our-characters
export const SET_TEHTAVAT = 'SET_TEHTAVAT';

export function getTehtavat() {
    return dispatch =>
    fetch(`${API_URL}/people`)
        .then(res => res.json())
        .then(res => res.results)
        .then(tehtavat =>
        dispatch(setTehtavat(tehtavat))
        );
}

export function setTehtavat(tehtavat) {
    return {
        type: SET_TEHTAVAT,
        tehtavat,
    };
}