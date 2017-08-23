import React from 'react';

const staticMapUrl1 = 'https://maps.googleapis.com/maps/api/staticmap?center=';
const staticMapUrl2 = '&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyCIr0jpTVj-s9pNn35kb4M4V3jyTFnsevc&format=png&visual_refresh=true';

const Savunleviaminen = (props) => (
    <div className="savunleviaminen">
        <ul>
        {props.smokespreading.map((smoke) =>
            <li className={ props.filter.arr.findIndex(a => a.id===smoke.nameId)!=-1 ? "selected" : "unselected"}>
            <a onClick={ props.selectSubItem(smoke.nameId, smoke, 'yesLayer', 'roadmap') }>
                <p><b>Savun leviäminen</b></p>
            </a>
            </li>
        )}
        </ul>
    </div>
);

export default Savunleviaminen;