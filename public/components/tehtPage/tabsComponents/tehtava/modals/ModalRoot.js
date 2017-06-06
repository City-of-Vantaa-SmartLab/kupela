import React from 'react';
import { connect } from 'react-redux';
import GetInfoModal from './GetInfoModal';

const MODAL_COMPONENTS = {
    'GET_INFO': GetInfoModal
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