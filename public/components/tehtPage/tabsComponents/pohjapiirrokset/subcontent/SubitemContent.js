import React from 'react';
import { connect } from 'react-redux';
import GMap from '../../reusables/templates/GMap';
import SubitemImage from '../../reusables/templates/SubitemImage';

const SubitemContent = (props) => {
    if(props.maptype === 'gmap') {
        return <GMap
            containerElement={
                <div style={{ height: '100%'}} />
            }
            mapElement={
                <div style={{ height: '70%', width: '70%'}} />
            }
            center={new google.maps.LatLng(60.192059, 24.945831)}
            zoom={10}
        />;
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