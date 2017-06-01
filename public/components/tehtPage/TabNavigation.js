import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentTab, showCurrentTabcontent } from '../../reducer/tab/actions';

const TabNavigation = ({ tabs, profile, selectTab }) => (
    <div className="container-fluid">
        <ul className="nav nav-pills">
            {tabs.map((tab) =>
                <li onClick={selectTab(tab.nameId, tab)}
                    key={tab.id}>
                    <Link to={`/tehtpage/${profile.name}/${tab.nameId}`}>{tab.name}</Link>
                </li>
            )}
        </ul>
    </div>
);

const mapStateToProps = ({ tabs, tehtava: {profile} }) => ({
    tabs,
    profile
});

const mapDispatchToProps = dispatch => ({
    selectTab(id, object) {
        return() => {
            dispatch(setCurrentTab(id));
            dispatch(showCurrentTabcontent(object));
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation);