import React from 'react';
import { connect } from 'react-redux';
import { setCurrentTehtava, getTehtavaProfile } from '../../reducer/tehtava/actions';

//code from: https://scotch.io/courses/getting-started-with-react-and-redux/displaying-our-characters
const TehtavaList = ({ tehtavat, setTehtava }) =>
    <div id='tehtava-list' className="col-md-3">
        <ul id="tehtava-ul">
            {tehtavat.map((c, i) =>
                <li onClick={setTehtava(i + 1)}
                    key={c.name}>
                    <p>{c.name}</p>
                </li>
            )}
        </ul>
    </div>;

const mapStateToProps = ({ tehtavat }) => ({
    tehtavat,
});

const mapDispatchToProps = dispatch => ({
    setTehtava(id) {
        return() => {
            dispatch(setCurrentTehtava(id));
            dispatch(getTehtavaProfile(id));
        };
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TehtavaList);