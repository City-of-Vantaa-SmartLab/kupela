import React from 'react';
import Basic from '../reusables/templates/Basic';

const Tieliikennekamerat = (props) =>
    <div className="tieliikennekamerat">
        <p><b>Tieliikennekamerat:</b></p>
        {props.roadcams.map((cam) =>
            <a onClick={props.selectItem(cam.nameId, 'GET_kuvatvideot', cam)}>
                <Basic src={cam.url} title={cam.name} {...props}/>
            </a>
        )}
    </div>;

export default Tieliikennekamerat;