import React from 'react';
import { Carousel } from 'react-bootstrap';

const staticMapUrl1 = 'https://maps.googleapis.com/maps/api/staticmap?center=';
const staticMapUrl2 = '&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyCIr0jpTVj-s9pNn35kb4M4V3jyTFnsevc&format=png&visual_refresh=true';

/*const Kartta = (props) => {
    if(props.carousel.carousel === true) {
        return (
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
    } else {
        return (
            <div className="kartta">
                <p><b>Kartta:</b></p>
                {props.roadmaps.map((m) =>
                    <a onClick={ props.selectSubItem(m.nameId, m, 'noLayer', 'roadmap') }>
                        <img src={ staticMapUrl1 + m.lat + ',' + m.lng + staticMapUrl2 }/>
                    </a>
                )}
            </div>
        );
    }
};*/

const Kartta = (props) => (
    <div className="kartta">
        <ul>
            {props.roadmaps.map((m) =>
                <li className={ props.filter.arr.findIndex(a => a.id===m.nameId)!=-1 ? "selected" : "unselected"}>
                    <a onClick={ props.selectSubItem(m.nameId, m, 'noLayer', 'roadmap') }>
                        <p><b>{m.name}</b></p>
                    </a>
                </li>
            )}
        </ul>
    </div>
);

export default Kartta;