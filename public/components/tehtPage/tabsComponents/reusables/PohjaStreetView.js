import React from 'react';

const staticStreetUrl1 = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=';
const staticStreetUrl2 = '&fov=90&heading=235&pitch=10&key=AIzaSyCIr0jpTVj-s9pNn35kb4M4V3jyTFnsevc&format=png&visual_refresh=true';

const PohjaStreetView = (props) => (
    <div className="streetview">
        <p><b>Street view:</b></p>
        {props.streetviews.map((view) =>
            <a onClick={props.selectSubItem(view.nameId, view, 'noLayer', 'streetview')}>
                <img src={ staticStreetUrl1 + view.lat + ',' + view.lng + staticStreetUrl2 } />
            </a>
        )}
    </div>
);

export default PohjaStreetView;