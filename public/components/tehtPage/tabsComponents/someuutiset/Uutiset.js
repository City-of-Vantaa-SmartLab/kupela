import React from 'react';
import Basic from '../reusables/templates/Basic';
import ShareButton from './ShareButton';

const Uutiset = (props) =>
    <div className="uutiset">
        <p><b>Uutiset:</b></p>
        {props.news.map((n) =>
            <div>
                <a onClick={props.selectItem(n.nameId, 'GET_some', n)}>
                    <Basic src={n.url} title={n.name} key={n.nameId}/>
                </a>
                <ShareButton onClick={props.clickShare(true, n.nameId, n)}
                             key={n.nameId} {...props}/>
            </div>
        )}
    </div>;

export default Uutiset;