import React from 'react';

const SubItemImage = (props) => (
    <div className="subitemContent scrollableArea">
        {props.filter.arr.map((f) =>
            <img key={f.id} src={f.subitem.url}/>
        )}
    </div>
);

export default SubItemImage;