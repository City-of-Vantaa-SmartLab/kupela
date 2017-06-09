import React from 'react';
import SubitemContent from './subcontent/SubitemContent';
import SubitemMenu from './subcontent/SubitemMenu';

const Saapuminen = (props) =>
    <div className="subtablayout">
        <SubitemMenu {...props}/>
        <SubitemContent/>
    </div>;

export default Saapuminen;