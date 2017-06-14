import React from 'react';
import ModalMenu from './ModalMenu';
import ModalContent from './ModalContent';

const GetInfoModal = (props) => (
    <div className="back">
        <div className="infomodal infomodal-grid">
            <ModalMenu className="modalmenu"/>
            <ModalContent component={props.content.component} className="modalcontent" {...props}/>
        </div>
    </div>
);

export default GetInfoModal;