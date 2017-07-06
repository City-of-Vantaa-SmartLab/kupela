import React from 'react';
import Showcase from './templates/Showcase';

const Kemikaalikortti = (props) => (
    <div className="kemikaalikortti">
        <p><b>Kemikaalikortti:</b></p>
        {props.chemicalcards.map((card) =>
            <a onClick={props.selectSubItem(card.nameId, card, 'noLayer', 'none')}>
                <Showcase src={card.url}/>
            </a>
        )}
    </div>
);

export default Kemikaalikortti;