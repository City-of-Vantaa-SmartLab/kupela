import React from 'react';
import TabNavigation from './TabNavigation';
import Content from './Content';

const TehtPage = () =>
    <div className="container">
        <div className="header">
            <TabNavigation/>
        </div>
        <div className="content">
            <Content/>
        </div>
    </div>;

export default TehtPage;