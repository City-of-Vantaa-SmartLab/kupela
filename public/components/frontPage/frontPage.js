import React from 'react';
import TehtavaList from './TehtavaList';
import Map from './Map';
import UserButtons from './UserButtons';
import ChangingContent from './ChangingContent';

const FrontPage = () =>
    <div className="content">
        <Map/>
        <TehtavaList/>
        <UserButtons/>
        <ChangingContent/>
    </div>;

export default FrontPage;
