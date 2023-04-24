import z from 'zod'
import { Produtos } from './services/Produtos';

console.log(z);

// const baseURL = "http://localhost:3000/"
const conteudo_tabela = document.querySelector('tbody')
// const item = {
//   nome: "Produto A",
//   marca: "Marca A",  
//   qtd: 10
// }


// async function createItem(item: any) {
//   try {
//     const response = await fetch(baseURL + "cadastroProdutos", {
//       method: "POST",
//         const tr = document.createElement('tr');
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(item),
//     });
//     console.log(response)
//     return response.json();
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// createItem(item).then(function(response) {
//   console.log(response)
// })


// async function request() {
//     try{
//       const response = await fetch(baseURL + "cadastroProdutos");
//       return response.json()
//     }catch(e) {
//       console.error(e);
//     };
// };

Produtos.getAll().then(produto =>{

    produto && produto.map(({id, nome, marca, qtd}:any)=>{

        const tdId = document.createElement('td');
        tdId.textContent = id;
        const tdNome = document.createElement('td');
        tdNome.textContent = nome;
        const tdMarca = document.createElement('td');
        tdMarca.textContent = marca;
        const tdQtd = document.createElement('td');
        tdQtd.textContent = qtd;
        const btnEdt = document.createElement('button');
        btnEdt.textContent = 'Editar'
        const btnRm = document.createElement('button');
        btnRm.textContent = 'Apagar'


        const tr = document.createElement('tr')
        tr.className = 'linha-tabela-produto';

        tr.append(tdId, tdNome, tdMarca, tdQtd, btnEdt, btnRm)
        conteudo_tabela!.appendChild(tr);
        
});

    
    
    
    // response.forEach((produto: any) => {
        //     tr.innerHTML = `
        //       <td>${produto.id}</td>
        //       <td>${produto.nome}</td>
        //       <td>${produto.marca}</td>
        //       <td>${produto.qtd}</td>
        //       <td>
        //         <button>editar</button>
        //         <button>remover</button>
        //       </td>
        //     `;
        //     conteudo_tabela!.appendChild(tr);
    //   });
});



