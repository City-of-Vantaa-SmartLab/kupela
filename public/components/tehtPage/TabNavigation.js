import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentTab, showCurrentTabcontent, setOriginalTemplate, resetFiltersToNull, resetSubtabToInitialstate } from '../../reducer/tab/actions';

const TabNavigation = (props) => (
    <div>
        <ul className="nav nav-pills" id="maintabs">
            {props.tabs.map((tab) =>
                <li onClick={ props.selectTab(tab.nameId, tab) }>
                    <Link to={`/tehtavat/${ props.profile.name }/${ tab.nameId }`}>{ tab.name }</Link>
                </li>
            )}
        </ul>
    </div>
);

const mapStateToProps = ({ tabs, tehtava: { profile } }) => ({
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
            dispatch(resetSubtabToInitialstate());
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation);