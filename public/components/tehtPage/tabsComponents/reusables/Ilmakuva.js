import React from 'react';
import { Carousel } from 'react-bootstrap';

const staticAirUrl1 = 'https://maps.googleapis.com/maps/api/staticmap?center=';
const staticAirUrl2 = '&zoom=13&size=600x300&maptype=satellite&key=AIzaSyCIr0jpTVj-s9pNn35kb4M4V3jyTFnsevc&format=png&visual_refresh=true';

const Ilmakuva = (props) => {
    if(props.carousel.carousel === true) {
        return (
            <div className="ilmakuva">
                <ul className="nav nav-pills">
                    {props.aerialviews.map((view) =>
                        <li className={ props.filter.arr.findIndex(a => a.id===view.nameId)!=-1 ? "selected" : "unselected"}>
                            <a onClick={props.selectSubItem(view.nameId, view, 'noLayer', 'satellite')}>
                                <p><b>{view.name}</b></p>
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="ilmakuva">
                <p><b>Ilmakuva:</b></p>
                {props.aerialviews.map((view) =>
                    <a onClick={props.selectSubItem(view.nameId, view, 'noLayer', 'satellite')}>
                        <img src={ staticAirUrl1 + view.lat + ',' + view.lng + staticAirUrl2 } />
                    </a>
                )}
            </div>
        );
    }
};

export default Ilmakuva;
