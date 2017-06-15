import React from 'react';
import Component from '../reusables/templates/Component';
import { connect } from 'react-redux';

const Kuvat = (props) =>
    <div className="kuvat">
        <p><b>Kuvat:</b></p>
        {props.images.map((img) =>
            <a onClick={props.selectItem(img.nameId, 'GET_kuva', img)}>
                <Component src={img.url} className={img.nameId} title={img.name} key={img.nameId}/>
            </a>
        )}
    </div>;

const mapStateToProps = ({ images }) => ({
    images
});

export default connect(mapStateToProps)(Kuvat);