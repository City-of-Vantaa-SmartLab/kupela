import React from 'react';
import Component from '../reusables/templates/Component';
import { connect } from 'react-redux';

const Tekstit = (props) =>
    <div className="tekstit">
        <p><b>Tekstit:</b></p>
        {props.texts.map((text) =>
            <a onClick={props.selectItem(text.nameId, 'GET_teksti', text)}>
                <Component src={text.url} className={text.nameId} title={text.name}/>
            </a>
        )}
    </div>;

const mapStateToProps = ({ texts }) => ({
    texts
});

export default connect(mapStateToProps, null)(Tekstit);