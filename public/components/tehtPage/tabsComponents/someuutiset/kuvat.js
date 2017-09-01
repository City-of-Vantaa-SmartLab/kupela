import React from 'react';
import { connect } from 'react-redux';
import Basic from '../reusables/templates/Basic';
import ShareButton from './ShareButton';
import { showAllImages, showPrioImages } from '../../../../reducer/images/actions';

const Kuvat = (props) =>
    <div className="kuvat">
        <p><b>Kuvat:</b></p>
        <div className="scrollableArea">
        {props.images.images.map((img) =>
            <div className={img.visible === true ? "visible" : "notVisible"}>
            <div className={img.priority === "1" ? "someImg priority" : "someImg nonpriority"}>
                <a onClick={props.selectItem(img.nameId, 'GET_some', img)}>
                    <Basic src={img.url} key={img.nameId} />
                </a>


            {props.buttons.map((b) =>
                {img.nameId===b.id ? img.isShared=b.isShared : false }
            )}
            <ShareButton onClick={props.clickShare(img.nameId, 2, img)}
                         url={img.url}
                         key={img.nameId}
                         isShared={img.isShared} />
            </div>
            </div>
        )}
        </div>

        <input className="showAllTextsButton somebtn" type="button" onClick={props.clickShowAllImages()} value="Näytä kaikki"/>
        <input className="showPriorityTextsButton somebtn" type="button" onClick={props.clickShowPriorityImages()} value="Näytä tärkeät"/>
    </div>;

const mapDispatchToProps = dispatch => ({
    clickShowAllImages() {
        return() => {
          dispatch(showAllImages());
        }
    },
    clickShowPriorityImages() {
        return() => {
          dispatch(showPrioImages());
        }
    }
});

export default connect(null, mapDispatchToProps)(Kuvat);
