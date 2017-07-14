import React from 'react';
import Basic from '../reusables/templates/Basic';

const Valvontakamerat = (props) =>
    <div className="valvontakamerat">
        <p><b>Valvontakamerat:</b></p>
        {props.securitycams.map((cam) =>
            <a onClick={props.selectItem(cam.nameId, 'GET_kuvatvideot', cam)}>
                <Basic src={cam.url} title={cam.name} {...props}/>
            </a>
        )}
    </div>;

export default Valvontakamerat;