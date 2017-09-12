import React from 'react';
import { connect } from 'react-redux';
import Basic from '../reusables/templates/Basic';
import ShareButton from './ShareButton';
import { showAllImages, showPrioImages } from '../../../../reducer/images/actions';

const FieldKuvat = (props) =>
    <div className="kuvat">
        <p><b>Kuvat:</b></p>

        {props.images.sharedimages.length > 0 ? (
        <div className="scrollableArea">
        {props.images.sharedimages.map((img) =>
            <div className={img.priority === "1" ? "someImg priority" : "someImg nonpriority"}>
              <div className="innerSomeText">
                <a onClick={props.selectItem(img.nameId, 'GET_some', img)}>
                    <Basic src={img.url} key={img.nameId} />
                </a>
              </div>
            </div>
        )}
        </div>) : (<p className="someInfoText">Ei vielä jaettuja kuvia.</p>)}

    </div>;

const mapDispatchToProps = dispatch => ({

});

export default connect(null, mapDispatchToProps)(FieldKuvat);
