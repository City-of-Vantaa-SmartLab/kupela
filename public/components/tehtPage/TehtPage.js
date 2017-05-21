import React from 'react';
import TabNavigation from './TabNavigation';
import Content from './Content';

const TehtPage = () =>
    <div className="container">
        <div className="header">
            <TabNavigation/>
        </div>
        <div className="content">
            <p>Tähän tulee niiden sisällöt.</p>
            <Content/>
        </div>
    </div>;

export default TehtPage;