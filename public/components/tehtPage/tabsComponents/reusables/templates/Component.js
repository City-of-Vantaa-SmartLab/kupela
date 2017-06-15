import React from 'react';

const Component = (props) => (
    <div className={props.className}>
        <p>{props.title}</p>
        <img src={props.src}/>
    </div>
);

export default Component;