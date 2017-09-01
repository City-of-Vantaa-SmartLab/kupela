import React from 'react';
import SubitemWrapper from './subcontent/SubitemWrapper';
import { connect } from 'react-redux';

const Saapuminen = (props) =>
    <SubitemWrapper {...props} />;

const mapStateToProps = ({ roadmaps, gatheringplaces, aerialviews, streetviews, tab: { carousel }, smokespreading }) => ({
    roadmaps,
    gatheringplaces,
    aerialviews,
    streetviews,
    carousel,
    smokespreading
});

export default connect(mapStateToProps, null)(Saapuminen);