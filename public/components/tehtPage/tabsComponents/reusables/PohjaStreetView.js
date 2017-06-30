import React from 'react';
import Showcase from './templates/Showcase';

const PohjaStreetView = (props) => (
    <div className="streetview">
        <p><b>Street view:</b></p>
        {props.streetviews.map((view) =>
            <a onClick={props.selectAsOnlySubItemcontent(view.nameId, view)}>
                <Showcase src={view.url} />
            </a>
        )}
    </div>
);

export default PohjaStreetView;