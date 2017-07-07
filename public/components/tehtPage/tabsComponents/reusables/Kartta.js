import React from 'react';

const staticMapUrl1 = 'https://maps.googleapis.com/maps/api/staticmap?center=';
const staticMapUrl2 = '&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyCIr0jpTVj-s9pNn35kb4M4V3jyTFnsevc&format=png&visual_refresh=true';

const Kartta = (props) => (
    <div className="kartta">
        <p><b>Kartta:</b></p>
        {props.roadmaps.map((m) =>
            <a onClick={ props.selectSubItem(m.nameId, m, 'noLayer', 'roadmap') }>
                <img src={ staticMapUrl1 + m.lat + ',' + m.lng + staticMapUrl2 }/>
            </a>
        )}
    </div>
);

export default Kartta;