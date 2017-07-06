import React from 'react';
import { connect } from 'react-redux';
import GMap from '../../reusables/templates/GMap';
import SubitemImage from '../../reusables/templates/SubitemImage';

const SubitemContent = (props) => {
    if(props.maptype === 'gmap') {
        return <GMap {...props}/>;
    } else if(props.maptype === 'aerial') {
        return <span/>;
    } else {
        return <SubitemImage {...props}/>;
    }
};

const mapStateToProps = ({ tab: { filter, maptype }}) => ({
    filter,
    maptype
});

export default connect(mapStateToProps, null)(SubitemContent);