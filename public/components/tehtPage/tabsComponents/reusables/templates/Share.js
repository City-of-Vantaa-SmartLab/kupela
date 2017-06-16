import React from 'react';
import { connect } from 'react-redux';
import { setSharedButton } from '../../../../../reducer/tab/actions';

const Share = (props) => (
    <div className="component">
        <p>{props.title}</p>
        <img src={props.src}/>
        <button className="share-btn" onClick={props.clickShare("Jaettu")}>
            Jaa johtoautoon
        </button>
    </div>
);

const mapDispatchToProps = dispatch => ({
    clickShare(label) {
        return() => {
            dispatch(setSharedButton(label));
        }
    }
});

export default connect(null, mapDispatchToProps)(Share);