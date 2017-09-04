import React from 'react';

const ItemContainer = (props) => (
    <div className="turvallisuushenkilosto">
        <ul>
            {props.pelastussuunnitelmatab.map((h) =>
                <li className={ props.filter.arr.findIndex(a => a.id===h.nameId)!=-1 ? "selected" : "unselected"}>
                    <a onClick={props.selectSubItem(h.nameId, h, 'noLayer', 'none')}>
                        <p><b>{h.name}</b></p>
                    </a>
                </li>
            )}
        </ul>
    </div>
);

export default ItemContainer;