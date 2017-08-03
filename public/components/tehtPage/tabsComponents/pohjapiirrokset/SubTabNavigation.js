import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentSubTab, showSubTabcontent, resetFiltersToNull } from '../../../../reducer/tab/actions';

const SubTabs = (props) => (
    <div className="subtabsmenu">
        <ul className="nav nav-pills" id="subtabs">
            {console.log(props)}
            {console.log(props.subid)}
            {props.routes.map((tab) =>
                <li className={tab.nameId===props.subid ? "selected" : "unselected"} onClick={props.selectSubTab(tab.nameId, tab)}>
                    <Link to={tab.nameId}>{tab.name}
                        {console.log(tab.nameId)}</Link>
                </li>
            )}
        </ul>
    </div>
);

const mapStateToProps = ({ tab: { subid } }) => ({
    subid
});

const mapDispatchToProps = dispatch => ({
    selectSubTab (id, object) {
        return () => {
            dispatch(setCurrentSubTab(id));
            dispatch(showSubTabcontent(object));
            dispatch(resetFiltersToNull());
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SubTabs);