import React from 'react';

const Sprinklerit = (props) => (
    <div className="sprinklerit">
        <p><b>Kerrokset:</b></p>
        <ul className="nav nav-pills">
            {props.floorplans.map((s) =>
                    <li className={ props.filter.arr.findIndex(a => a.id===s.nameId)!=-1 ? "selected" : "unselected"}>
                        <a onClick={props.selectSubItem(s.nameId, s, 'noLayer', 'image')}>
                            <p>{s.name}</p>
                        </a>
                    </li>
            )}
        </ul>
    </div>
);

export default Sprinklerit;