import React from 'react';

const Tehtava = (props) =>
    <div className="tehtava">
        {props.routes.map((comp) =>
            <comp.component key={comp.nameId} {...comp}/>
        )}
    </div>;

export default Tehtava;