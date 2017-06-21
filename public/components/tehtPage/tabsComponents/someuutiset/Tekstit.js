import React from 'react';
import Share from '../reusables/templates/Share';
import { connect } from 'react-redux';

const Tekstit = (props) =>
    <div className="tekstit">
        <p><b>Tekstit:</b></p>
        {props.texts.map((text) =>
            <div>
                <a onClick={props.selectItem(text.nameId, 'GET_some', text)}>
                    <Share src={text.url} title={text.name} key={text.nameId}
                           nameId={text.nameId}
                           content={text} {...props}/>
                </a>
                <input className="share-btn" type="button" onClick={props.clickShare("Jaettu", text.nameId, text)} value={props.button.label}/>
            </div>
        )}
    </div>;

const mapStateToProps = ({ texts, tab: { button } }) => ({
    texts,
    button
});

export default connect(mapStateToProps, null)(Tekstit);