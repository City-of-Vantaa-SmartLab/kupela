import React from 'react';
import SubitemContent from './subcontent/SubitemContent';
import SubitemMenu from './subcontent/SubitemMenu';
import { connect } from 'react-redux';

const Saapuminen = (props) =>
    <div className="subtablayout">
        <SubitemMenu {...props}/>
        <SubitemContent />
    </div>;

const mapStateToProps = ({ roadmaps, gatheringplaces, aerialviews, streetviews, tab: { carousel } }) => ({
    roadmaps,
    gatheringplaces,
    aerialviews,
    streetviews,
    carousel
});

export default connect(mapStateToProps, null)(Saapuminen);