import React from 'react';
import './styles.scss'
import useModal from '../../context/modal/hook';

const Header = () => {
const { setShowModal } = useModal()

    return (
        <header className='controle' onClick={()=> setShowModal(true)}>
            <h1 className='titulo'>Controle de estoque</h1>
            <div className="inputs">
                <button className="adicionar">+</button>
                <input type="search" className='busca' />
            </div>
        </header>

    );

}

export default Header;