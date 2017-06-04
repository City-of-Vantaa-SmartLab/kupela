import React from 'react';

const Kohdetiedot = (comp) => (
    <div className="kohdetiedot">
        <p><b>Tähän tulee ilmakuva, yhteystiedot ja kohdekortti</b></p>
        {comp.components.map((c) =>
            <c.component key={c.nameId}/>
        )}
    </div>
);

export default Kohdetiedot;