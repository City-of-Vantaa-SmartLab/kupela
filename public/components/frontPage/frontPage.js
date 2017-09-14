import React from 'react';
import MissionList from './MissionList';
import Map from './Map';
import UserButtons from './UserButtons';
import ChangingContent from './ChangingContent';

const FrontPage = () =>
    <div className="frontpageContent">
        <Map/>
        <div className="frontPageLeftContent">
          <UserButtons/>
          <MissionList/>
        </div>
    </div>;

export default FrontPage;
