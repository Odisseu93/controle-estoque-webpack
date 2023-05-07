import React from 'react';
import { Produtos } from '../../../services/Produtos';
import { uuid } from '../../../utils/uuid';
import './styles.scss';
import { UseMainContext } from '../../../context/MainContext/hooks';
import { typeEnumAlert } from '../../Alert/types';

const Form = () => {
    const {
        formData,
        setFormData,
        render,
        setRender,
        setShowModal,
        setAlertData,
        alertRender,
        setAlertRender
    } = UseMainContext();

    const handleCancel = () => {
        if (document.querySelector('#formPostPut')) {
            const form = document.querySelector('#formPostPut');
            form!.querySelectorAll('input')?.forEach(inp => inp.value = '');
            setFormData({
                id: '',
                nome: '',
                marca: '',
                qtd: 0,
            })
            setShowModal(false);
        } else null;

    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;

        if ([formData.id, formData.nome, formData.qtd].every(attribute => attribute !== '' && attribute !== undefined)) {
            const inputs = {
                id: String(formData.id),
                nome: String(form['nome'].value),
                marca: String(form['marca'].value),
                qtd: Number(form['qtd'].value),
            };
            Produtos
                .update(inputs)
                .then((res) => {
                    if (res instanceof Error) {
                        setAlertRender(alertRender + 1);
                        setAlertData({
                            type: typeEnumAlert.ERROR,
                            title: 'Aconteceu Algum erro!',
                            wait: 2000
                        });
                        throw res
                    };
                    console.log(`%c${JSON.stringify({
                        message: 'Produto atualizado com sucesso!',
                        data: res
                    }, null, 3)}`, 'background:white; color:blue;');
                    setTimeout(() => setRender(render + 1), 500);
                    setAlertRender(alertRender + 1);
                    setAlertData({
                        type: typeEnumAlert.DEFAULT,
                        title: 'Produto atualizado com sucesso!',
                        wait: 2000
                    });
                });

        } else {
            const inputs = {
                id: String(uuid()),
                nome: String(form['nome'].value),
                marca: String(form['marca'].value),
                qtd: Number(form['qtd'].value),
            };
            Produtos
                .create(inputs)
                .then((res) => {
                    if (res instanceof Error) {
                        setAlertRender(alertRender + 1);
                        setAlertData({
                            type: typeEnumAlert.ERROR,
                            title: 'Aconteceu Algum erro!',
                            wait: 2000
                        });
                        throw res
                    };
                    setAlertRender(alertRender + 1);
                    setAlertData({
                        type: typeEnumAlert.SUCCESS,
                        title: 'Produto cadastrado com sucesso!',
                        wait: 2000
                    });
                    console.log(`%c${JSON.stringify({
                        message: 'Produto criado com sucesso!',
                        data: res
                    }, null, 3)}`, 'background:white; color:green;');
                    setTimeout(() => setRender(render + 1), 500);
                });
        }
        setFormData({
            id: '',
            nome: '',
            marca: '',
            qtd: 0,
        })
        setShowModal(false);
    }


    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const target = e.currentTarget;
        const name = target.name;
        const value = target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }


    return (
        <form className='form' id='formPostPut' onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" maxLength={30} onChange={(e) => handleChange(e)} name="nome" value={formData.nome} required />
            </div>
            <div className="form-group">
                <label htmlFor="marca">Marca</label>
                <input type="text" id="marca" maxLength={15} onChange={(e) => handleChange(e)} name="marca" value={formData.marca} required />
            </div>
            <div className="form-group">
                <label htmlFor="qtd">Quantidade</label>
                <input type="number" min={0} id="qtd" onChange={(e) => handleChange(e)} name="qtd" value={formData.qtd} required />
            </div>
            <div className="form-group">
                <button type="submit" id="btnEnviar" className="btns btn-enviar">Enviar</button>
                <button type="button" id="btnCancelar" onClick={handleCancel} className="btns btn-cancelar">Cancelar</button>
            </div>
        </form>
    );
};

export default Form;