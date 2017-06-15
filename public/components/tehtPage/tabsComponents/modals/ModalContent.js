import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../../../reducer/modal/actions';

const ModalContent = (props) => (
    <div className={props.className}>
        <props.component/>
        <button type="button" className="return-btn" onClick={props.closeModal()}>
            X
        </button>
    </div>
);

const mapDispatchToProps = dispatch => ({
    closeModal() {
        return() => {
            dispatch(hideModal());
        }
    }
});

export default connect(null, mapDispatchToProps)(ModalContent);