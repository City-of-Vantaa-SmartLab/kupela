import React from 'react';

const Basic = (props) => (
    <div className="component">
        <p>{props.title}</p>
        <img src={props.src} />
    </div>
);

export default Basic;