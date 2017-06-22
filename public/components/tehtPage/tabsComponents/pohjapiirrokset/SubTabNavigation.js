import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentSubTab, showSubTabcontent, resetFiltersToNull } from '../../../../reducer/tab/actions';

const SubTabs = (props) => (
    <div className="subtabsmenu">
        <ul className="nav nav-pills" id="subtabs">
            {props.routes.map((tab) =>
                <li onClick={props.selectSubTab(tab.nameId, tab)}>
                    <Link to={tab.nameId}>{tab.name}</Link>
                </li>
            )}
        </ul>
    </div>
);

const mapDispatchToProps = dispatch => ({
    selectSubTab (id, object) {
        return () => {
            dispatch(setCurrentSubTab(id));
            dispatch(showSubTabcontent(object));
            dispatch(resetFiltersToNull());
        };
    }
});

export default connect(null, mapDispatchToProps)(SubTabs);