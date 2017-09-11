import React from 'react';
import Showcase from './templates/Showcase';

const Kemikaalikortti = (props) => (
    <div className="kemikaalikortti">
        <p><b>Kemikaalikortit:</b></p>
        <ul>
        {props.chemicalcards.map((card) =>
            <a onClick={props.selectSubItem(card.nameId, card, 'noLayer', 'none')}>
                <li className={ props.filter.arr.findIndex(a => a.id===card.nameId)!=-1 ? "selected" : "unselected"}>
                    <p><b>{card.name}</b></p>
                </li>
            </a>
        )}
        </ul>
    </div>
);

export default Kemikaalikortti;