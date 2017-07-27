import { withGoogleMap, GoogleMap, StreetViewPanorama } from 'react-google-maps';

const StartStreetView = withGoogleMap(props => (
    <GoogleMap
        defaultCenter={props.center}
        defaultZoom={props.zoom}>
        <StreetViewPanorama
            defaultPosition={props.center}
            visible
        />
    </GoogleMap>
));

export default StartStreetView;