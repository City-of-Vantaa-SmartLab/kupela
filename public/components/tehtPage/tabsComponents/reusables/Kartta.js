import React from 'react';
import { Carousel } from 'react-bootstrap';

const staticMapUrl1 = 'https://maps.googleapis.com/maps/api/staticmap?center=';
const staticMapUrl2 = '&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyCIr0jpTVj-s9pNn35kb4M4V3jyTFnsevc&format=png&visual_refresh=true';

const Kartta = (props) => (
    <div className="kartta">
        <p><b>Kartta:</b></p>
        <Carousel>
            {props.roadmaps.map((m) =>
                <Carousel.Item>
                    <a onClick={ props.selectSubItem(m.nameId, m, 'noLayer', 'roadmap') }>
                        <img src={ staticMapUrl1 + m.lat + ',' + m.lng + staticMapUrl2 }/>
                    </a>
                </Carousel.Item>
            )}
        </Carousel>
    </div>
);

export default Kartta;