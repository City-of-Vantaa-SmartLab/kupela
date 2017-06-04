import React from 'react';

const Dokumentaatio = (props) =>
    <div className="dokumentaatio">
        {props.routes.map((comp) =>
            <comp.component key={comp.nameId} {...comp}/>
        )}
    </div>;

export default Dokumentaatio;