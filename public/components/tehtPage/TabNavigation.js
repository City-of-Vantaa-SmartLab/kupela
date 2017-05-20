import React from 'react';
import { connect } from 'react-redux';

const TabNavigation = ({ tabs }) =>
    <div className="container-fluid">
        <ul>
            {tabs.map((c)=>
            <li key={c.name}>
                <p>{c.name}</p>
            </li>
            )}
        </ul>
    </div>;

const mapStateToProps = ({ tabs }) => ({
   tabs,
});

export default connect(mapStateToProps)(TabNavigation);