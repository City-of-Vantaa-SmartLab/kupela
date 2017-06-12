import React from 'react';
import { hideModal } from '../../../../reducer/modal/actions';
import { connect } from 'react-redux';
import ModalMenu from './ModalMenu';
import ModalContent from './ModalContent';

const Modal = (props) => (
    <div className="back">
        <div className="modal modal-grid">
            <ModalMenu {...props}/>
            <ModalContent {...props} text={props.text}/>
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