import React from 'react';
import Showcase from './templates/Showcase';

const Pohjapiirros = (props) => (
    <div className="pohjapiirros">
        <p><b>Pohjapiirros:</b></p>
        {props.floorplans.map((plan) =>
            <a onClick={props.selectSubItem(plan.nameId, plan, 'yesLayer', 'image')}>
                <Showcase src={plan.url} />
            </a>
        )}
    </div>
);

export default Pohjapiirros;
