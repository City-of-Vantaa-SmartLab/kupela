import React from 'react';
import Basic from '../reusables/templates/Basic';

const StreetView = (props) =>
    <div className="streetview">
        <p><b>Street view:</b></p>
        {props.streetviews.map((view) =>
            <a onClick={props.selectItem(view.nameId, 'GET_kuvatvideot', view)}>
                <Basic src={view.url} title={view.name} {...props}/>
            </a>
        )}
    </div>;

export default StreetView;