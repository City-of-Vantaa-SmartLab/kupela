import React from 'react';
import Showcase from './templates/Showcase';

const Escape = (props) => (
    <div className="escape">
        <p><b>ESCAPE:</b></p>
        {props.escape.map((e) =>
            <a onClick={props.selectSubItem(e.nameId, e, 'noMap')}>
                <Showcase src={e.url}/>
            </a>
        )}
    </div>
);

export default Escape;