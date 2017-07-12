import React from 'react';
import Showcase from './templates/Showcase';
import { Carousel } from 'react-bootstrap';

const Kokoontumispaikka = (props) => {
    if(props.carousel.carousel === true) {
        return (
            <div className="kokoontumispaikka">
                <p><b>Kokoontumispaikka:</b></p>
                <Carousel>
                    {props.gatheringplaces.map((place) =>
                        <Carousel.Item>
                            <a onClick={props.selectSubItem(place.nameId, place, 'yesLayer', 'image')}>
                                <Showcase src={place.url} />
                            </a>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        );
    } else {
        return (
            <div className="kokoontumispaikka">
                <p><b>Kokoontumispaikka:</b></p>
                {props.gatheringplaces.map((place) =>
                    <a onClick={props.selectSubItem(place.nameId, place, 'yesLayer', 'image')}>
                        <Showcase src={place.url} />
                    </a>
                )}
            </div>
        );
    }
};

export default Kokoontumispaikka;