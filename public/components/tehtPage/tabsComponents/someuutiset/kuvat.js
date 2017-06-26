import React from 'react';
import Basic from '../reusables/templates/Basic';

const Kuvat = (props) =>
    <div className="kuvat">
        <p><b>Kuvat:</b></p>
        {props.images.map((img) =>
            <div>
                <a onClick={props.selectItem(img.nameId, 'GET_some', img)}>
                    <Basic src={img.url} title={img.name} key={img.nameId}/>
                </a>
                <input className="share-btn" type="button" onClick={props.clickShare("Jaettu", img.nameId, img)} value={props.button.sharedProps.label}/>
            </div>
        )}
    </div>;

export default Kuvat;