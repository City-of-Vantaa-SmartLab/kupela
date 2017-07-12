import React from 'react';
import SubitemWrapper from './subcontent/SubitemWrapper';
import { connect } from 'react-redux';

const Saapuminen = (props) =>
    <SubitemWrapper {...props} />;

const mapStateToProps = ({ roadmaps, gatheringplaces, aerialviews, streetviews, tab: { carousel } }) => ({
    roadmaps,
    gatheringplaces,
    aerialviews,
    streetviews,
    carousel
});

export default connect(mapStateToProps, null)(Saapuminen);