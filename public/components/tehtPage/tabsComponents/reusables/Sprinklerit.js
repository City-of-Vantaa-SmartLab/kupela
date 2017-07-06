import React from 'react';
import Showcase from './templates/Showcase';

const Sprinklerit = (props) => (
    <div className="sprinklerit">
        <p><b>Sprinklerit:</b></p>
        {props.sprinklers.map((s) =>
            <a onClick={props.selectSubItem(s.nameId, s, 'yesLayer', 'image')}>
                <Showcase src={s.url} />
            </a>
        )}
    </div>
);

export default Sprinklerit;