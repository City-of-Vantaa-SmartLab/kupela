import React from 'react';
import Basic from '../reusables/templates/Basic';

const Uutiset = (props) =>
    <div className="uutiset">
        <p><b>Uutiset:</b></p>
        {props.news.map((n) =>
            <div>
                <a onClick={props.selectItem(n.nameId, 'GET_some', n)}>
                    <Basic src={n.url} title={n.name} key={n.nameId}/>
                </a>
                <input className="share-btn" type="button" onClick={props.clickShare("Jaettu", n.nameId, n)} value={props.button.sharedProps.label}/>
            </div>
        )}
    </div>;

export default Uutiset;