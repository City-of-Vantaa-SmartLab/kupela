import { withGoogleMap, GoogleMap } from 'react-google-maps';

const GMap = withGoogleMap(props =>
    <GoogleMap
        defaultCenter={props.center}
        zoom={props.zoom}
    />
);

export default GMap;