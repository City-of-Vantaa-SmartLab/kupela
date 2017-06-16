import React from 'react';

const Share = (props) => (
    <div className="component">
        <p>{props.title}</p>
        <img src={props.src}/>
    </div>
);

export default Share;