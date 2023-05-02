import React from 'react';
import './styles.scss'

const Header = () => {
    return (<header className='controle'>
        <h1 className='titulo'>Controle de estoque</h1>
        <div className="inputs">
            <button className="adicionar">+</button>
            <input type="search" className='busca' />
        </div>
    </header>

    );

}

export default Header;