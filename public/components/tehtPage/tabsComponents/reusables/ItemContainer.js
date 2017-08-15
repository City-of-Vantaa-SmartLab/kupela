import React from 'react';

const ItemContainer = (props) => (
    <div className="turvallisuushenkilosto">
        {props.pelastussuunnitelmatab.map((h) =>
            <a onClick={props.selectSubItem(h.nameId, h, 'noLayer', 'none')}>
                <p><b>{h.name}</b></p>
            </a>
        )}
    </div>
);

export default ItemContainer;