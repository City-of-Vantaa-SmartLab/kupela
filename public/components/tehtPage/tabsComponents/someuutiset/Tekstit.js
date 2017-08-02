import React from 'react';
import Basic from '../reusables/templates/Basic';
import ShareButton from './ShareButton';

const Tekstit = (props) =>
    <div className="tekstit">
        <p><b>Tekstit:</b></p>
        {props.texts.map((text) =>
            <div>
                <a onClick={props.selectItem(text.nameId, 'GET_some', text)}>
                    <Basic src={text.url} title={text.name} key={text.nameId} />
                </a>
                {props.buttons.map((b) =>
                    {text.nameId===b.id ? text.isShared=b.isShared : false }
                )}
                <ShareButton onClick={props.clickShare(text.nameId, text)}
                             key={text.nameId}
                             isShared={text.isShared} />
            </div>
        )}
    </div>;

export default Tekstit;