import React from 'react';
import SubTabs from '../pohjapiirrokset/SubTabNavigation';
import Content from '../pohjapiirrokset/Content';

const Pohjapiirrokset = (props) => (
    <div className="pohjapiirrokset">
        <Content/>
        <SubTabs {...props}/>
    </div>
);

export default Pohjapiirrokset;