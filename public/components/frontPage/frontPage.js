import React from 'react';
import TehtavaList from './TehtavaList';
import Map from './Map';

const FrontPage = () =>
    <div className="container">
        <div className="content">
            <Map/>
            <TehtavaList/>
        </div>
    </div>;

export default FrontPage;