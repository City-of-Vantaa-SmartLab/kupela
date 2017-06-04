import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { setCurrentSubTab, showSubTabcontent } from '../../../../reducer/tab/actions';

const SubTabs = (props, { selectSubTab }) => (
    <div className="menu">
        <ul className="nav nav-pills nav-stacked" id="subtabs">
            {props.routes.map((tab) =>
                <li key={tab.nameId}
                    onClick={() => selectSubTab(tab.nameId, tab)}>
                    <Link to={tab.nameId}>{tab.name}</Link>
                </li>
            )}
        </ul>
    </div>
);

const mapDispatchToProps = dispatch => ({
    selectSubTab (id, content) {
        return () => {
            dispatch(setCurrentSubTab(id));
            dispatch(showSubTabcontent(content));
        }
    }
});

export default connect(mapDispatchToProps)(SubTabs);