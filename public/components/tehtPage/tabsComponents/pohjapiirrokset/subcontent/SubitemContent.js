import React from 'react';
import { connect } from 'react-redux';

const SubitemContent = ({ subitem }) => (
    <div className="subitemContent">
        <subitem.component key={subitem.nameId}/>
    </div>
);

const mapStateToProps = ({ tab: { subitem }}) => ({
    subitem
});

export default connect(mapStateToProps)(SubitemContent);