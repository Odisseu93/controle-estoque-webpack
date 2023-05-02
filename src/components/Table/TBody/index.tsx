import React, { useEffect, useState } from "react";
import { Produtos } from "../../../services/Produtos";
import { setDataLocalStorage } from "../../../utils/localStorage";
import useFormData from "../../../context/form/hook";
import { uuid } from "../../../utils/uuid";


const TBody = () => {

    const [produtos, setProdutos] = useState([]);
    const [reRender , SetReRender] = useState(0);
    const { formData, setFormData } = useFormData()

    useEffect(() => {
        Produtos.getAll().then(data => setProdutos(data));
    }, [reRender])



    const HandleClickBtnRem = (id: string) => {
        Produtos.remove(id)
        SetReRender(reRender + 1);
    };
    
    const HandleClickBtnEdt = (id: string) => {
        // setDataLocalStorage('temp-produtos', produtos.find((item: any) => item.id = id));
        const data:any = produtos.filter((item: any) => item.id = id)
        // setFormData({id: 'sfsdg', marca:'jkhksf', nome: 'asfkalj', qtd: 2 });
        // setFormData( produtos.filter((item: any) => item.id = id));
        // console.log(data)
        console.log(formData)
        // SetReRender(reRender + 1);
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