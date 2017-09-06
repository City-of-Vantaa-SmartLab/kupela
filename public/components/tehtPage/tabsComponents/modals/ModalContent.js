import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../../../reducer/modal/actions';

const ModalContent = (props) => (
    <div className={props.className}>
        <button type="button" className="return-btn" onClick={props.closeModal()}>
            X
        </button>
        <div className="scrollableArea">
          <props.component/>
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

export default connect(null, mapDispatchToProps)(ModalContent);
