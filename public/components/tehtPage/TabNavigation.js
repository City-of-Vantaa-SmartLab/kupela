import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentTab, showCurrentTabcontent, setOriginalTemplate, resetFiltersToNull, resetSubtabToInitialstate, setTabClass} from '../../reducer/tab/actions';

const TabNavigation = (props) => (
    <div>
        <ul className="nav nav-pills" id="maintabs">
            {props.tabs.map((tab) =>
                <li className={props.li_class[props.li_class.findIndex(a => a.nameId===tab.nameId)].liClass} onClick={ props.selectTab(tab.nameId, tab) }>
                    <Link to={`/tehtavat/${ props.profile.name }/${ tab.nameId }`}>{ tab.name }</Link>
                </li>
            )}
        </ul>
    </div>
);

const mapStateToProps = ({ tab: { li_class }, tabs, tehtava: { profile } }) => ({
    li_class,
    tabs,
    profile
});

const mapDispatchToProps = dispatch => ({
    selectTab(id, object) {
        return() => {
            dispatch(setCurrentTab(id));
            dispatch(setTabClass(id));
            dispatch(showCurrentTabcontent(object));
            dispatch(setOriginalTemplate());
            dispatch(resetFiltersToNull());
            dispatch(resetSubtabToInitialstate());
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation);