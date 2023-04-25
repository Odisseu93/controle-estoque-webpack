import { Produtos } from "../../../services/Produtos";

const TBody = () => {

    const tbody = document.createElement('tbody');
     
        Produtos.getAll().then((produto) => {
            
            produto.map((item: string) => {
                
                const tr = document.createElement('tr')
                tr.className = 'linha-tabela-produto';
            
            
            console.table(item)

            for (let [chave, valor] of Object.entries(
                item
            )) {

                const td = document.createElement('td');
                td.className = `td-${chave}`;

                
                td.textContent = String(valor);
                tr.append(td)
            };
            
            const btnEdt = document.createElement('button');
            btnEdt.textContent = 'Editar';

            const btnRm = document.createElement('button');
            btnRm.textContent = 'Remover';

            tr.append(btnEdt, btnRm);

            tbody.append(tr);

        });
    });


    return tbody;
}



export default TBody;