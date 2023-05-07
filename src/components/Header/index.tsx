import React from 'react';
import './styles.scss'
import { UseMainContext } from '../../context/MainContext/hooks';

const Header = () => {
const { setShowModal } = UseMainContext()

    return (
        <header className='controle'>
            <h1 className='titulo'>Controle de estoque</h1>
            <div className="inputs">
                <button className="adicionar" onClick={()=> setShowModal(true)}>+</button>
                <input type="search" className='busca' />
            </div>
        </header>

    );

}

export default Header;