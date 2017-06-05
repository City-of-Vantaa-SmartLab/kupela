import React from 'react';

const Kohdetiedot = (comp) => (
    <div className="kohdetiedot">
        {comp.components.map((c) =>
            <c.component key={c.nameId}/>
        )}
    </div>
);

export default Kohdetiedot;