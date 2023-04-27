import './styles.scss'
import TBody from "./TBody";
import THead from "./THead";

const Table = ()=> {

    const table = document.createElement('table');
    
    table.className = 'conteudo';

    table.appendChild(THead());
    table.appendChild(TBody());


    return table;
}



export default Table;