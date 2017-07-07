import { withGoogleMap, GoogleMap } from 'react-google-maps';

const StartRoadMap = withGoogleMap(props => (
    <GoogleMap
        defaultCenter={ props.center }
        defaultZoom={ props.zoom }
        defaultMapTypeId={ props.mapTypeId }
    />
));

const GMap = (props) =>
    <div className="subitemContent">
        {props.filter.arr.map((item) =>
            <StartRoadMap
                key={item.id}
                containerElement={
                    <div style={{ height: '100%' }}/>
                }
                mapElement={
                    <div style={{ height: '100%', width: '100%' }}/>
                }
                zoom={11}
                center={ new google.maps.LatLng(item.subitem.lat, item.subitem.lng )}
                mapTypeId={ props.maptype }
            />
        )}
    </div>;

export default GMap;