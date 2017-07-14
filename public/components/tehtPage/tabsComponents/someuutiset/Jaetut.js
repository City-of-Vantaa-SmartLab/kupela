import React from 'react';
import Basic from '../reusables/templates/Basic';

const Jaetut = (props) =>
    <div className="jaetut">
        <p><b>Jaetut:</b></p>
        {props.shared_info.map((a) =>
            <a onClick={props.selectItem(a.id, 'GET_some', a.content)}>
                <Basic src={a.content.url} title={a.content.name} key={a.id}/>
            </a>
        )}
    </div>;

export default Jaetut;