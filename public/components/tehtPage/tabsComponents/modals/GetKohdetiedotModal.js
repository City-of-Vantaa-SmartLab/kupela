import React from 'react';
import Modal from './Modal';

const GetKohdeTiedotModal = (props) => (
    <Modal text="Sulje"
           component={props.content.component}/>
);

export default GetKohdeTiedotModal;