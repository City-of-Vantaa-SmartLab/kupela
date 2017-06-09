import React from 'react';

const Basic = (props) => (
    <div className={`${props.name}`}>
        <p><b>{props.title}</b></p>
        <div>
            {props.info}
        </div>
    </div>
);

export default Basic;