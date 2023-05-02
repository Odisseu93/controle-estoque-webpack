import React from 'react';
import { uuid } from '../../../utils/uuid';
const THead = () => {

const th = ()=> {
   return ['ID', 'Nome', 'Marca', 'Qtd', 'Opções'].map(att => <th key={uuid()}>{att}</th>);
}

    return (
        <thead className='topico'>
           {th()} 
        </thead>
    )
}



export default THead;