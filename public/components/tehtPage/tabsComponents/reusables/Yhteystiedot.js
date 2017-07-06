import React from 'react';
import Showcase from './templates/Showcase';

const Yhteystiedot = (props) => (
    <div className="yhteystiedot">
        <p><b>Yhteystietoja:</b></p>
        {props.contacts.map((c) =>
            <a onClick={props.selectSubItem(c.nameId, c, 'noLayer', 'none')}>
                <Showcase src={c.url} />
            </a>
        )}
    </div>
);

export default Yhteystiedot;