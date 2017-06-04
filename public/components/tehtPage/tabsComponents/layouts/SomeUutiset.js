import React from 'react';

const SomeUutiset = (props) =>
    <div className="someuutiset">
        {props.routes.map((comp) =>
            <comp.component key={comp.nameId} {...comp}/>
        )}
    </div>;

export default SomeUutiset;