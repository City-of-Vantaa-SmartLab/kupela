import React from 'react';
import Showcase from './templates/Showcase';

const Kartta = (props) => (
    <div className="kartta">
        <p><b>Kartta:</b></p>
        {props.roadmaps.map((road) =>
            <a onClick={props.selectSubItem(road.nameId, road, 'yesMap')}>
                <Showcase src={road.url} />
            </a>
        )}
    </div>
);

export default Kartta;