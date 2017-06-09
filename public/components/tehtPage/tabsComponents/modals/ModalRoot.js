import React from 'react';
import { connect } from 'react-redux';
import GetKohdetiedotModal from './GetKohdetiedotModal';

//code from: https://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions/35641680
const MODAL_COMPONENTS = {
    'GET_KOHDETIEDOT': GetKohdetiedotModal,
};

const ModalRoot = ({ id }) => {
    if (!id.modalType) {
        return <span/>;
    } else {
        const SpecificModal = MODAL_COMPONENTS[id.modalType];
        return <SpecificModal {...id.modalProps}/>;
    }
};

const mapStateToProps = ({ modal: { id } }) => ({
    id
});

export default connect(mapStateToProps, null)(ModalRoot);