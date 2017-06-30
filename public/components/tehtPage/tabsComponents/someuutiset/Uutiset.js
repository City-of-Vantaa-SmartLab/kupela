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
                <input className="share-btn"
                       type="button"
                       onClick={props.clickShare(true, n.nameId, n)}
                       value={(props.button.isShared ? 'Jaettu' : 'Jaa johtoautoon')}
                       key={n.nameId}
                />
            </div>
        )}
    </div>;

export default Uutiset;