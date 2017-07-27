import React from 'react';
import Basic from './templates/Basic';

const Kolmiulotteinenkartta = (props) =>
    <div className="kolmiulotteinen">
        <p><b>3D-kartat:</b></p>
        {props.maps.map((m) =>
            <a onClick={props.selectItem(m.nameId, 'GET_kuvatvideot', m)}>
                <Basic src={m.url} title={m.name} />
            </a>
        )}
    </div>;

export default Kolmiulotteinenkartta;