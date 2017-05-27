import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { setCurrentTab, showCurrentTabcontent } from '../../reducer/tab/actions';

const TabNavigation = ({ tabs, selectTab }) => (
    <Router history={history}>
        <div className="container-fluid">
            <ul className="nav nav-pills">
                {tabs.map((tab) =>
                    <li onClick={selectTab(tab.id, tab)}
                        key={tab.id}>
                        <Link to={`/${tab.nameId}`}>{tab.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    </Router>
);

const mapStateToProps = ({ tabs }) => ({
   tabs,
});

const mapDispatchToProps = dispatch => ({
    selectTab(id, c) {
        return() => {
            dispatch(setCurrentTab(id));
            dispatch(showCurrentTabcontent(c));
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation);