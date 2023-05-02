import React from 'react';
import './styles.scss'
import TBody from "./TBody";
import THead from "./THead";

const Table = () => {


    return (
        <table className='conteudo'>
            <THead />
            <TBody />
        </table>)

}



export default Table;