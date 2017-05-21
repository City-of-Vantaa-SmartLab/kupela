import React from 'react';
import { connect } from 'react-redux';

const Content = ({ content }) =>
    <div className="container-fluid">
        <h1>{content.id}</h1>
    </div>;

const mapStateToProps = ({ tab: content}) => ({
    content
});

export default connect(mapStateToProps)(Content);