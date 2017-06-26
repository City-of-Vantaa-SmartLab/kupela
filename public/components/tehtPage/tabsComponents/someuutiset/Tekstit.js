import React from 'react';
import Basic from '../reusables/templates/Basic';

const Tekstit = (props) =>
    <div className="tekstit">
        <p><b>Tekstit:</b></p>
        {props.texts.map((text) =>
            <div>
                <a onClick={props.selectItem(text.nameId, 'GET_some', text)}>
                    <Basic src={text.url} title={text.name} key={text.nameId}/>
                </a>
                <input className="share-btn" type="button" onClick={props.clickShare("Jaettu", text.nameId, text)} value={props.button.sharedProps.label}/>
            </div>
        )}
    </div>;

export default Tekstit;