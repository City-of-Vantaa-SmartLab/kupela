import React from 'react';
import { connect } from 'react-redux';

const Content = ({ subcontent, subid }) =>
    <div className="subcontent">
        <subcontent.component key={subid.subid} {...subcontent}/>
    </div>;

const mapStateToProps = ({ tab: { subcontent, subid } }) => ({
    subcontent,
    subid
});

export default connect(mapStateToProps, null)(Content);
