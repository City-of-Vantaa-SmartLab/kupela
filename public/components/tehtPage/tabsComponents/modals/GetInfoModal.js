import React from 'react';
import Modal from './Modal';

const GetInfoModal = (props) => (
    <Modal text="Sulje"
           component={props.content.component}/>
);

export default GetInfoModal;