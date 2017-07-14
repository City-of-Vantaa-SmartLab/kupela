import React from 'react';
import Basic from '../reusables/templates/Basic';
import ShareButton from './ShareButton';

const Kuvat = (props) =>
    <div className="kuvat">
        <p><b>Kuvat:</b></p>
        {props.images.map((img) =>
            <div>
                <a onClick={props.selectItem(img.nameId, 'GET_some', img)}>
                    <Basic src={img.url} title={img.name} key={img.nameId} />
                </a>
                <ShareButton onClick={props.clickShare(img.nameId, img)}
                             key={img.nameId}
                             isShared={img.isShared} />
            </div>
        )}
    </div>;

export default Kuvat;