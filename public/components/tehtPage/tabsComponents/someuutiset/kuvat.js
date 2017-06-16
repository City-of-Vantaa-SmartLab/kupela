import React from 'react';
import Share from '../reusables/templates/Share';
import { connect } from 'react-redux';

const Kuvat = (props) =>
    <div className="kuvat">
        <p><b>Kuvat:</b></p>
        {props.images.map((img) =>
            <div>
                <a onClick={props.selectItem(img.nameId, 'GET_some', img)}>
                    <Share src={img.url} title={img.name} key={img.nameId}
                           nameId={img.nameId}
                           content={img} {...props}/>
                </a>
                <button className="share-btn" type="button" onClick={props.clickShare("Jaettu", img.nameId, img)}>
                    Jaa johtoautoon
                </button>
            </div>
        )}
    </div>;

const mapStateToProps = ({ images }) => ({
    images
});

export default connect(mapStateToProps)(Kuvat);