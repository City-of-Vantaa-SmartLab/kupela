import React from 'react';
import { connect } from 'react-redux';

const ModalContent = (props) => (
    <div className="modalcontent">
        <props.component/>
        <button type="button" onClick={props.closeModal()}>
            {props.text}
        </button>
    </div>
);

const mapStateToProps = ({ modal: { id }}) => ({
    id
});

export default ModalContent;