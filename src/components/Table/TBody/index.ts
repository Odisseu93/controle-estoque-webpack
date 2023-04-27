import { Produtos } from "../../../services/Produtos";
import { setDataLocalStorage } from "../../../utils/localStorage";

const TBody = () => {

    const tbody = document.createElement('tbody');
     
    
    const HandleClickBtnRem = (id: string) => {
        Produtos.remove(id)
    };

    const HandleClickBtnEdt = (item: any) => {
        setDataLocalStorage('temp-produtos',item);
    };
    
    
    
    Produtos.getAll().then((produto) => {
            
            produto.map((item: any) => {
                
                const tr = document.createElement('tr')
                tr.className = 'linha-tabela-produto';
            
            
            // console.table(item)

            for (let [chave, valor] of Object.entries(
                item
            )) {

                const td = document.createElement('td');
                td.className = `td-${chave}`;

                
                td.textContent = String(valor);
                tr.id = chave === 'id' ? chave : '';
                tr.append(td)
            };
            
            const btnEdt = document.createElement('button');
            btnEdt.textContent = 'Editar';
            
            const btnRm = document.createElement('button');
            btnRm.textContent = 'Remover';

            const {id } = item;

            btnRm.onclick = ()=> HandleClickBtnRem(id);
            btnEdt.onclick = ()=> HandleClickBtnEdt(item);
            
          
            tr.append(btnEdt, btnRm);

            tbody.append(tr);

        });
    });


    return tbody;
}



export default TBody;