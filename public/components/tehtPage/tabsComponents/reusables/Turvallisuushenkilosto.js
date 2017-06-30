import React from 'react';
import Showcase from './templates/Showcase';

const Turvallisuushenkilosto = (props) => (
    <div className="turvallisuushenkilosto">
        <p><b>Turvallisuushenkilöstö:</b></p>
        {props.henkilosto.map((h) =>
            <a onClick={props.selectSubItem(h.nameId, h, 'noMap')}>
                <Showcase src={h.url} />
            </a>
        )}
    </div>
);

export default Turvallisuushenkilosto;