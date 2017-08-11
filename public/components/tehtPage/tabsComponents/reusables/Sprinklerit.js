import React from 'react';
import Showcase from './templates/Showcase';

const Sprinklerit = (props) => (
    <div className="sprinklerit">
        <p><b>Kerrokset:</b></p>
        {props.floorplans.map((s) =>
            <div className={ props.filter.arr.findIndex(a => a.id===s.nameId)!=-1 ? "selected" : "unselected"}>
                <a onClick={props.selectSubItem(s.nameId, s, 'yesLayer', 'image')}>
                    <p>{s.name}</p>
                </a>
            </div>
        )}
    </div>
);

export default Sprinklerit;