import React from 'react';
import { hideModal } from '../../../../../reducer/modal/actions';
import { connect } from 'react-redux';

const Modal = (props) => (
    <div className="back">
        <div className="modal">
            <props.component/>
            <button type="button" onClick={props.close}>
                {props.text}
            </button>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    close() {
        return() => {
            dispatch(hideModal);
        }
    }
});

export default connect(null, mapDispatchToProps)(Modal);