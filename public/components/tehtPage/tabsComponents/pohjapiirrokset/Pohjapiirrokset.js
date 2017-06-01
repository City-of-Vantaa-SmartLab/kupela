import React from 'react';
import SubTabs from './SubTabNavigation';
import Content from './Content';

const Pohjapiirrokset = (props) => (
    <div className="content">
        <SubTabs {...props}/>
        <Content/>
    </div>
);

export default Pohjapiirrokset;