import React from 'react';
import { connect } from 'react-redux';
import GMap from '../../reusables/templates/GMap';
import GStreetView from '../../reusables/templates/GStreetView';
import SubitemImage from '../../reusables/templates/SubitemImage';

const SubitemContent = (props) => {
    if(props.maptype === 'roadmap' || props.maptype === 'satellite') {
        return <GMap {...props} />;
    } else if (props.maptype === 'streetview'){
        return <GStreetView {...props} />;
    } else {
        return <SubitemImage {...props} />;
    }
};

const mapStateToProps = ({ tab: { filter, maptype }}) => ({
    filter,
    maptype
});

export default connect(mapStateToProps, null)(SubitemContent);