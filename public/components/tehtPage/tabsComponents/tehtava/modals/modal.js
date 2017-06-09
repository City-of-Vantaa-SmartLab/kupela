import React from 'react';
import { hideModal } from '../../../../../reducer/modal/actions';
import { connect } from 'react-redux';

const Modal = (props) => (
    <div className="back" onClick={() => props.dispatch(hideModal())}>
        <div className="modal">
            <props.component/>
            <button type="button" onClick={() => props.dispatch(hideModal())}>
                {props.text}
            </button>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    closeModal() {
        return() => {
            dispatch(hideModal());
        }
    }
});

export default connect(null, mapDispatchToProps)(Modal);