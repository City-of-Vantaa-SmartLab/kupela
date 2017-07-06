import React from 'react';

const Kartta = (props) => (
    <div className="kartta">
        <p><b>Kartta:</b></p>
        {props.roadmaps.map((m) =>
            <a onClick={props.selectSubItem(m.nameId, m, 'noLayer', 'gmap')}>
                <img src={m.url}/>
            </a>
        )}
    </div>
);

export default Kartta;