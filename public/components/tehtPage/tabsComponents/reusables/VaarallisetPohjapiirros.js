import React from 'react';
import Showcase from './templates/Showcase';

const VaarallisetPohjapiirros = (props) => (
    <div className="vaarallisetpohja">
        <p><b>Pohjapiirros:</b></p>
        {props.dangerfloorplans.map((plan) =>
            <a onClick={props.selectSubItem(plan.nameId, plan, 'yesMap')}>
                <Showcase src={plan.url}/>
            </a>
        )}
    </div>
);

export default VaarallisetPohjapiirros;