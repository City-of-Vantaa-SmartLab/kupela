import React from 'react';
import Showcase from './templates/Showcase';

const Palovaroittimet = (props) => (
    <div className="palovaroittimet">
        <p><b>Palovaroittimet:</b></p>
        {props.firealarms.map((alarm) =>
            <a onClick={props.selectSubItem(alarm.nameId, alarm)}>
                <Showcase src={alarm.url} />
            </a>
        )}
    </div>
);

export default Palovaroittimet;