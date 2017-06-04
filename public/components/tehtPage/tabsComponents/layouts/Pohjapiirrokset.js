import React from 'react';
import SubTabs from './SubTabNavigation';
import Content from './Content';

const Pohjapiirrokset = (props) => (
    <div className="pohjapiirrokset">
        <Content/>
        <SubTabs {...props}/>
    </div>
);

export default Pohjapiirrokset;