import React from 'react';
import SubitemWrapper from './subcontent/SubitemWrapper';
import { connect } from 'react-redux';

const Palonsijainti = (props) =>
    <SubitemWrapper {...props} />;

const mapStateToProps = ({ floorplans }) => ({
    floorplans
});

export default connect(mapStateToProps, null)(Palonsijainti);