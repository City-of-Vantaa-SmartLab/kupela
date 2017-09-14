import React from 'react';
import { connect } from 'react-redux';
import GMap from '../tehtPage/tabsComponents/reusables/googleMaps/GMap';
import StartRoadMap from '../tehtPage/tabsComponents/reusables/googleMaps/StartRoadMap';

const Map = (props) => (
    <div className="frontpageMapArea">
        <p><b>Tehtävät kartalla:</b></p>
        <div className="scrollableArea">
        {props.frontpagemap.maps.map((frontmap) => (
          <div className="testArea">
          {props.frontpagemap.selectedMap == frontmap.index ? (
            <StartRoadMap
                key={frontmap.nameId}
                containerElement={
                    <div style={{ height: '650px', width: '850px' }}/>
                }
                mapElement={
                    <div style={{ height: '100%', width: '100%' }}/>
                }
                zoom={17}
                center={ new google.maps.LatLng(frontmap.lat, frontmap.lng )}
                mapTypeId={ frontmap.maptype }
                {...props}
            />
          ) : (null)}
          </div>
        ))}
        </div>
    </div>
);

const mapStateToProps = ({ frontpagemap }) => ({
    frontpagemap
});

export default connect(mapStateToProps, null)(Map);
