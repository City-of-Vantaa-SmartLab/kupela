import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentTab, showCurrentTabcontent, setOriginalTemplate, resetFiltersToNull, resetSubtabToInitialstate, setTabClass} from '../../reducer/tab/actions';
import { resetNewItems } from '../../reducer/tabs/actions';

const TabNavigation = (props) => (
    <div>
        <ul className="nav nav-pills" id="maintabs">
            {props.tabs.tablist.map((tab) =>
                <li className={props.id===tab.nameId ? "selected" : "unselected"} onClick={ props.selectTab(tab.nameId, tab) }>
                    <Link to={`/tehtavat/${ props.profile.name }/${ tab.nameId }`}>{ tab.name } {tab.newitems > 0 ? (<div className='newItem'> ({tab.newitems}) </div> ) : ("")}</Link>
                </li>
            )}
        </ul>
    </div>
);

const mapStateToProps = ({ tab: { id, newitems }, tabs, mission: { profile } }) => ({
    id,
    newitems,
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
            dispatch(resetNewItems(id));
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation);
