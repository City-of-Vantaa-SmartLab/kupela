import React from 'react';
import Showcase from './templates/Showcase';

const Kokoontumispaikka = (props) => (
    <div className="kokoontumispaikka">
        <p><b>Kokoontumispaikka:</b></p>
        {props.gatheringplaces.map((place) =>
            <a onClick={props.selectSubItem(place.nameId, place, 'yesMap')}>
                <Showcase src={place.url} />
            </a>
        )}
    </div>
);

export default Kokoontumispaikka;