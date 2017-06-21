import React from 'react';
import Share from '../reusables/templates/Share';
import { connect } from 'react-redux';

const Uutiset = (props) =>
    <div className="uutiset">
        <p><b>Uutiset:</b></p>
        {props.news.map((n) =>
            <div>
                <a onClick={props.selectItem(n.nameId, 'GET_some', n)}>
                    <Share src={n.url} title={n.name} key={n.nameId}
                           nameId={n.nameId}
                           content={n} {...props} />
                </a>
                <input className="share-btn" type="button" onClick={props.clickShare("Jaettu", n.nameId, n)} value={props.button.label}/>
            </div>
        )}
    </div>;

const mapStateToProps = ({ news, tab: { button } }) => ({
    news,
    button
});

export default connect(mapStateToProps, null)(Uutiset);