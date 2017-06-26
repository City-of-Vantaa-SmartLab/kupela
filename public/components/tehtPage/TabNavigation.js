import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentTab, showCurrentTabcontent, setOriginalTemplate, resetFiltersToNull } from '../../reducer/tab/actions';

const TabNavigation = ({ tabs, profile, selectTab }) => (
    <div>
        <ul className="nav nav-pills" id="maintabs">
            {tabs.map((tab) =>
                <li onClick={selectTab(tab.nameId, tab)}>
                    <Link to={`/tehtavat/${profile.name}/${tab.nameId}`}>{tab.name}</Link>
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
            dispatch(setOriginalTemplate());
            dispatch(resetFiltersToNull());
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation);