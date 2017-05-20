import React from 'react';
import TabNavigation from './TabNavigation';

const TehtPage = () =>
    <div className="container">
        <div>
            <p>Tähän tulee välilehdet.</p>
            <TabNavigation/>
        </div>
        <div>
            <p>Tähän tulee niiden sisällöt.</p>
        </div>
    </div>;

export default TehtPage;