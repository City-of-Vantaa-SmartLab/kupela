import React from 'react';

const Test = (props) => (
    <div className={`${props.className}`}>
        <p><b>{props.title}</b></p>
        <div>
            {props.info}
        </div>
    </div>
);

export default Test;