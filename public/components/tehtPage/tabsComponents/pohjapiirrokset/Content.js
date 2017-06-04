import React from 'react';
import { connect } from 'react-redux';

const Content = ({ subcontent }) =>
    <div className="subcontent">
        <subcontent.component key={subcontent.component.nameId}/>
    </div>;

const mapStateToProps = ({ tab: { subcontent } }) => ({
    subcontent
});

export default connect(mapStateToProps)(Content);