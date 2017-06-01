import React from 'react';
import TehtavaList from './TehtavaList';
import Map from './Map';

const FrontPage = () =>
    <div className="content">
        <Map/>
        <TehtavaList/>
    </div>;

export default FrontPage;