import React, { useEffect, useState } from "react";
import { Produtos } from "../../../services/Produtos";
import useFormData from "../../../context/form/hook";
import { uuid } from "../../../utils/uuid";
import { useRender } from "../../../context/render/hook";
import { TProduto } from "../../../services/Produtos/types";



const TBody = () => {
    
    const [produtos, setProdutos] = useState<TProduto[]>();
    const {setFormData } = useFormData();
    const {render, setRender} = useRender();
    
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
    };

    return (
        <tbody>
            {produtos ? produtos.map(({ id, nome, marca, qtd }: any) => {
                return <tr key={uuid()} className='linha-tabela-produto'>
                    <td className="td-id">{id}</td>
                    <td className="td-nome">{nome}</td>
                    <td className="td-marca">{marca}</td>
                    <td className="td-qtd">{qtd}</td>
                    <div className="btns">
                        <button onClick={() => HandleClickBtnEdt(id)}>Editar</button>
                        <button onClick={() => HandleClickBtnRem(id)}>Apagar</button>
                    </div>
                </tr>
            }) : null}
        </tbody>

    );
}



export default TBody;