import React from 'react';
import { connect } from 'react-redux';
import { setCurrentTab } from '../../reducer/tab/actions';

const TabNavigation = ({ tabs, setTab }) =>
    <div className="container-fluid">
        <ul id="tab-ul" className="nav nav-pills">
            {tabs.map((c, i)=>
            <li onClick={setTab(i + 1)}
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
    setTab(id) {
        return() => {
            dispatch(setCurrentTab(id));
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation);