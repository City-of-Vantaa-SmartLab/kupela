import React from 'react';
import { Carousel } from 'react-bootstrap';

const staticAirUrl1 = 'https://maps.googleapis.com/maps/api/staticmap?center=';
const staticAirUrl2 = '&zoom=13&size=600x300&maptype=satellite&key=AIzaSyCIr0jpTVj-s9pNn35kb4M4V3jyTFnsevc&format=png&visual_refresh=true';

const Ilmakuva = (props) => (
    <div className="ilmakuva">
        <p><b>Ilmakuva:</b></p>
        <Carousel>
            {props.aerialviews.map((view) =>
                <Carousel.Item>
                    <a onClick={props.selectSubItem(view.nameId, view, 'noLayer', 'satellite')}>
                        <img src={ staticAirUrl1 + view.lat + ',' + view.lng + staticAirUrl2 } />
                    </a>
                </Carousel.Item>
            )}
        </Carousel>
    </div>
);

export default Ilmakuva;