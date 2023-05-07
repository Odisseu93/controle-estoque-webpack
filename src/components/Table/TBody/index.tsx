import React, { useEffect, useState } from "react";
import { Produtos } from "../../../services/Produtos";
import { uuid } from "../../../utils/uuid";
import { TProduto } from "../../../services/Produtos/types";
import { UseMainContext } from "../../../context/MainContext/hooks";



const TBody = () => {
    
    const [produtos, setProdutos] = useState<TProduto[]>();
    const {
        setFormData,
        setShowModal,
        render,
        setRender,
        filter, 
        setFilter } = UseMainContext();

    const fetch = () => {
       Produtos.getAll().then(data => setProdutos(data));
    };

    useEffect(() => {
        fetch();

    }, [render])
    

    const HandleClickBtnRem = (id: string) => {
        Produtos.remove(id)
        setRender(render + 1);
    };
    
    const HandleClickBtnEdt = (id: string) => {
        if (produtos !== undefined) {
            const selectedItem = produtos.find(item => item.id === id);
            selectedItem !== undefined ? setFormData(selectedItem) : null;
        }
        setShowModal(true);
    };

    return (
        <tbody>
            {produtos ? produtos.filter(({ id, nome })=> id === filter || nome.match(new RegExp(filter , 'i')) ).map(({ id, nome, marca, qtd }: TProduto) => {
                return <tr key={uuid()} className='linha-tabela-produto'>
                    <td className="td-id">{id}</td>
                    <td className="td-nome">{nome}</td>
                    <td className="td-marca">{marca}</td>
                    <td className="td-qtd">{qtd}</td>
                    <td className="btns">
                        <button onClick={() => HandleClickBtnEdt(id)}>Editar</button>
                        <button onClick={() => HandleClickBtnRem(id)}>Apagar</button>
                    </td>
                </tr>
            }) : null}
        </tbody>

    );
}



export default TBody;