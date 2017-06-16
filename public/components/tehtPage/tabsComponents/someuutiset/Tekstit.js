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
                <button className="share-btn" type="button" onClick={props.clickShare("Jaettu", text.nameId, text)}>
                    Jaa johtoautoon
                </button>
            </div>
        )}
    </div>;

const mapStateToProps = ({ texts }) => ({
    texts
});

export default connect(mapStateToProps, null)(Tekstit);