import React from 'react';

const Kartta = (props) => (
    <div className="kartta">
        <p><b>Kartta:</b></p>
        {props.roadmaps.map((m) =>
            <a onClick={props.selectSubItem(m.nameId, m, 'noLayer', 'gmap')}>
                <img src="https://maps.googleapis.com/maps/api/staticmap?center=&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyCIr0jpTVj-s9pNn35kb4M4V3jyTFnsevc"/>
            </a>
        )}
    </div>
);

export default Kartta;