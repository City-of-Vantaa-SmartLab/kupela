import React from 'react';
import { connect } from 'react-redux';
import { setCurrentTab, getCurrentTabcontent } from '../../reducer/tab/actions';

const TabNavigation = ({ tabs, getTab }) =>
    <div className="container-fluid">
        <ul id="tab-ul" className="nav nav-pills">
            {tabs.map((c, i)=>
                    <li onClick={getTab(i + 1)}
                    key={c.name}>
                        <p>{c.name}</p>
                    </li>
            )}
        </ul>
    </div>;

const mapStateToProps = ({ tabs }) => ({
   tabs,
});

const mapDispatchToProps = dispatch => ({
    getTab(id) {
        return() => {
            dispatch(setCurrentTab(id));
            dispatch(getCurrentTabcontent(id));
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation);