import { withGoogleMap, GoogleMap } from 'react-google-maps';

const StartRoadMap = withGoogleMap(props => (
    <GoogleMap
        defaultCenter={ props.center }
        defaultZoom={ props.zoom }
        defaultMapTypeId={ props.mapTypeId }
    />
));

export default StartRoadMap;