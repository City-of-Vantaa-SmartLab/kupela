import React from 'react';
import Showcase from './templates/Showcase';

const Luetteloaineista = (props) => (
    <div className="luetteloaineista">
        <p><b>Luettelo vaarallisista aineista:</b></p>
        {props.listofsubstances.map((list) =>
            <a onClick={props.selectSubItem(list.nameId, list, 'noLayer', 'none')}>
                <Showcase src={list.url}/>
            </a>
        )}
    </div>
);

export default Luetteloaineista;