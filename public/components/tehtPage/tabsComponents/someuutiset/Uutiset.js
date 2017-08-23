import React from 'react';
import Basic from '../reusables/templates/Basic';
import ShareButton from './ShareButton';

const Uutiset = (props) =>
    <div className="uutiset">
        <p><b>Uutiset:</b></p>
        {props.news.map((n) =>
            <div>
            <p>Source</p>
            <p>Happening</p>
            <p>Location</p>
            <p>Description</p>
                <a onClick={props.selectItem(n.nameId, 'GET_some', n)}>
                    <Basic src={n.url} title={n.name} key={n.nameId} />
                </a>

            </div>
        )}
    </div>;

export default Uutiset;
