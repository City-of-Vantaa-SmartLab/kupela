import React from 'react';
import Showcase from './templates/Showcase';

const Pelastus = (props) => (
    <div className="pelastussuunnitelma">
        <p><b>Pelastussuunnitelma:</b></p>
        {props.rescueplans.map((plan) =>
            <a onClick={props.selectSubItem(plan.nameId, plan, 'noMap')}>
                <Showcase src={plan.url} />
            </a>
        )}
    </div>
);

export default Pelastus;