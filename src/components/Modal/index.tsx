import React from 'react';
import Form from './Form';
import './styles.scss';
import useModal from '../../context/modal/hook';

const Modal = ()=> {
    const { showModal } = useModal();

    return (
        <dialog className='modal' open={showModal} >
            <Form />
        </dialog>
    );
};

export default Modal;