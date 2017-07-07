import React from 'react';

const staticMapUrl1 = 'https://maps.googleapis.com/maps/api/staticmap?center=';
const staticMapUrl2 = '&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyCIr0jpTVj-s9pNn35kb4M4V3jyTFnsevc&format=png&visual_refresh=true';

const Savunleviaminen = (props) => (
    <div className="savunleviaminen">
        <p><b>Savun leviäminen:</b></p>
        {props.smokespreading.map((smoke) =>
            <a onClick={ props.selectSubItem(smoke.nameId, smoke, 'yesLayer', 'roadmap') }>
                <img src={ staticMapUrl1 + smoke.lat + ',' + smoke.lng + staticMapUrl2 }/>
            </a>
        )}
    </div>
);

export default Savunleviaminen;