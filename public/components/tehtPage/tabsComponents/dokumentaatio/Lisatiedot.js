import React from 'react';
import { connect } from 'react-redux';

const Lisatiedot = ({ profile }) => (
    <div className="lisatiedot">
        <h3>Luokitus / {profile.name} </h3>
        <p><b>Sisältö:</b></p>
    </div>
);

const mapStateToProps = ({ tehtava: profile}) => ({
    profile
});

export default connect(mapStateToProps)(Lisatiedot);