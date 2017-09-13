import React from 'react';
import SubitemContent from './SubitemContent';
import SubitemMenu from './SubitemMenu';

const SubitemWrapper = (props) => (
    <div className="subtablayout">
        <SubitemMenu {...props} />
        <SubitemContent />
    </div>
);

export default SubitemWrapper;
