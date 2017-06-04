import React from 'react';

const KuvatVideot = (props) =>
    <div className="kuvatvideot">
        {props.routes.map((comp) =>
            <comp.component key={comp.nameId} {...comp}/>
        )}
    </div>;

export default KuvatVideot;