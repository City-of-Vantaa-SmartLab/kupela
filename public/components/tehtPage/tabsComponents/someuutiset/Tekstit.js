import React from 'react';
import Share from '../reusables/templates/Share';
import { connect } from 'react-redux';

const Tekstit = (props) =>
    <div className="tekstit">
        <p><b>Tekstit:</b></p>
        {props.texts.map((text) =>
            <a onClick={props.selectItem(text.nameId, 'GET_some', text)}>
                <Share src={text.url} title={text.name} {...props}/>
            </a>
        )}
    </div>;

const mapStateToProps = ({ texts }) => ({
    texts
});

export default connect(mapStateToProps, null)(Tekstit);