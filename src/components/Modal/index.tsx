import React from 'react';
import Form from './Form';
import './styles.scss';
import { UseMainContext } from '../../context/MainContext/hooks';

const Modal = ()=> {
    const { showModal } = UseMainContext();

    return (
        <dialog className='modal' open={showModal} >
            <Form />
        </dialog>
    );
};

export default Modal;