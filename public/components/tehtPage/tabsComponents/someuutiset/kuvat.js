import React from 'react';
import Share from '../reusables/templates/Share';
import { connect } from 'react-redux';

const Kuvat = (props) =>
    <div className="kuvat">
        <p><b>Kuvat:</b></p>
        {props.images.map((img) =>
            <a onClick={props.selectItem(img.nameId, 'GET_some', img)}>
                <Share src={img.url} title={img.name} key={img.nameId} {...props}/>
            </a>
        )}
    </div>;

const mapStateToProps = ({ images }) => ({
    images
});

export default connect(mapStateToProps)(Kuvat);