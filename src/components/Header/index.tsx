import React from 'react';
import './styles.scss'
import { UseMainContext } from '../../context/MainContext/hooks';

const Header = () => {
const { setShowModal, setFilter } = UseMainContext();

const handleInput = (e: React.FormEvent<HTMLInputElement>)=>{
    const value = e.currentTarget.value;
    setFilter(value);
}

    return (
        <header className='controle'>
            <h1 className='titulo'>Controle de estoque</h1>
            <div className="inputs">
                <button className="adicionar" onClick={()=> setShowModal(true)}>+</button>
                <input type="search" className='busca' onInput={(e)=> handleInput(e)} />
            </div>
        </header>

    );

}

export default Header;