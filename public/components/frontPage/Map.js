import React from 'react';
import { connect } from 'react-redux';
import GMap from '../tehtPage/tabsComponents/reusables/googleMaps/GMap';

const Map = (props) =>
    <div className="frontpageMapArea">
        <p><b>Tehtävät kartalla:</b></p>
        <GMap {...props} />
    </div>;

const mapStateToProps = ({ tab: { filter, maptype }}) => ({
    filter,
    maptype
});

export default connect(mapStateToProps, null)(Map);

//<img id="map" src="http://cic.vtt.fi/eco/w82/images/hki.gif" alt="Kartta"/>
