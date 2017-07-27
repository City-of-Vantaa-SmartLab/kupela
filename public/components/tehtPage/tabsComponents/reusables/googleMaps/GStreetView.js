import StartStreetView from './StartStreetView';

const GStreetView = (props) =>
    <div className="subitemContent">
        {props.filter.arr.map((item) =>

            <StartStreetView
                key={item.id}
                containerElement={
                    <div style={{height: '100%'}}/>
                }
                mapElement={
                    <div style={{height: '100%'}}/>
                }
                center={{ lat: item.subitem.lat, lng: item.subitem.lng }}
                zoom={13}
            />
        )}
    </div>;

export default GStreetView;