import React from 'react';
import Showcase from './templates/Showcase';

const Ilmakuva = (props) => (
    <div className="ilmakuva">
        <p><b>Ilmakuva:</b></p>
        {props.aerialviews.map((view) =>
            <a onClick={props.selectSubItem(view.nameId, view, 'noLayer', 'aerial')}>
                <Showcase src={view.url} />
            </a>
        )}
    </div>
);

export default Ilmakuva;