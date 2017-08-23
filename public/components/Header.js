import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { showCurrentPage } from '../reducer/page/actions';
import Login from './authentication/Login';


const Header = ({ profile, selectMission, pages}) =>
    <div className="header-box">
        <div>
            <h1 id="teht-title"
                key={profile.name}
                onClick={selectMission(pages[1])}>
                <Link to={`/tehtavat/${profile.name}`}>Luokitus / {profile.name}</Link>
            </h1>
        </div>
    </div>;

const mapStateToProps = ({ mission: { profile }, pages}) => ({
    profile,
    pages
});

const mapDispatchToProps = dispatch => ({
    selectMission(page) {
        return () => {
            dispatch(showCurrentPage(page));
        }
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
