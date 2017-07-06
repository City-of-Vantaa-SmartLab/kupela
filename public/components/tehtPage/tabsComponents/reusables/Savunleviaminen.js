import React from 'react';
import Showcase from './templates/Showcase';

const Savunleviaminen = (props) => (
    <div className="savunleviaminen">
        <p><b>Savun leviäminen:</b></p>
        {props.smokespreading.map((smoke) =>
            <a onClick={props.selectSubItem(smoke.nameId, smoke, 'yesLayer', 'gmap')}>
                <Showcase src={smoke.url}/>
            </a>
        )}
    </div>
);

export default Savunleviaminen;