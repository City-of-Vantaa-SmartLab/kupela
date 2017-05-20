import React from 'react';
import { connect } from 'react-redux';

//code from: https://scotch.io/courses/getting-started-with-react-and-redux/displaying-our-characters
const showList = ({ tehtavat }) =>
    <div id='tehtava-list' className="container">
        <ul>
            {tehtavat.map(c =>
                <li key={c.name}>
                    <p>{c.name}</p>
                </li>
            )}
        </ul>
    </div>;

const mapStateToProps = ({ tehtavat }) => ({
    tehtavat,
});

export default connect(mapStateToProps)(showList);