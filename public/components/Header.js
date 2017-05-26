import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const Header = ({ profile }) =>
    <div className="container">
        <div id="tehtava-profile" className="row">
            <h1 id="teht-title">Luokitus / {profile.name}</h1>
        </div>
    </div>;

const mapStateToProps = ({ tehtava: { profile } }) => ({
    profile
});

export default connect(mapStateToProps)(Header);