import StartRoadMap from './StartRoadMap';

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
                zoom={13}
                center={ new google.maps.LatLng(item.subitem.lat, item.subitem.lng )}
                mapTypeId={ props.maptype }
                {...props}
            />
        )}
    </div>;

export default GMap;