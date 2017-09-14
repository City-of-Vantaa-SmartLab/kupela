import React from 'react';
import SubitemContent from './SubitemContent';
import SubitemMenu from './SubitemMenu';

const SubitemWrapper = (props) => (
    <div className="subtablayout">
        <div className="scrollableArea">
          <SubitemMenu {...props} />
        </div>
        <SubitemContent />
    </div>
);

export default SubitemWrapper;
