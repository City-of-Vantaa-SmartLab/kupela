import React from 'react';
import Showcase from './templates/Showcase';

const Sprinklerit = (props) => (
    <div className="sprinklerit">
        <p><b>Kerrokset:</b></p>
        {props.floorplans.map((s) =>
            <div>
                <a onClick={props.selectSubItem(s.nameId, s, 'yesLayer', 'image')}>
                    <p>{s.name}</p>
                </a>
            </div>
        )}
    </div>
);

export default Sprinklerit;