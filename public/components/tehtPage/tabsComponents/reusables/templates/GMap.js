import { withGoogleMap, GoogleMap } from 'react-google-maps';

const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultCenter={ props.center }
        defaultZoom={ props.zoom }
    />
));

const GMap = (props) =>
    <div className="subitemContent">
        {props.filter.arr.map((item) =>
            <GettingStartedGoogleMap
                containerElement={
                    <div style={{height: '100%'}}/>
                }
                mapElement={
                    <div style={{height: '100%', width: '100%'}}/>
                }
                zoom={13}
                center={new google.maps.LatLng(item.subitem.lat, item.subitem.lng)}
            />
        )}
    </div>;

export default GMap;