"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseURL = "http://localhost:3000/";
const conteudo_tabela = document.querySelector('.conteudo tbody');
const item = {
    nome: "Produto A",
    marca: "Marca A",
    qtd: 10
};
function createItem(item) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(baseURL + "cadastroProdutos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            });
            console.log(response);
            return response.json();
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    });
}
createItem(item).then(function (response) {
    console.log(response);
});
function request() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(baseURL + "cadastroProdutos");
            return response.json();
        }
        catch (e) {
            console.error(e);
        }
        ;
    });
}
;
request().then(function (response) {
    console.log(response);
    response.forEach((produto) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${produto.id}</td>
          <td>${produto.nome}</td>
          <td>${produto.marca}</td>
          <td>${produto.qtd}</td>
          <td>
            <button>editar</button>
            <button>remover</button>
          </td>
        `;
        conteudo_tabela.appendChild(tr);
    });
});
