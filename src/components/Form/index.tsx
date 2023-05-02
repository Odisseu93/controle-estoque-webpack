import React from 'react';
import { Produtos } from '../../services/Produtos';
import { debounce } from '../../utils/debouce';
import { getDataLocalStorage, localStorageClear } from '../../utils/localStorage';
import { uuid } from '../../utils/uuid';
import './styles.scss';
import FormContextProvider from '../../context/form/provider';
import useFormData from '../../context/form/hook';

const Form = () => {
    const {formData, setFormData} = useFormData();
    const {id, marca, nome, qtd} = formData;
    // const form = document.createElement('form');
    // form.className = 'form';

    // // limpa o formulário e os dados no localstorade
    // const clear = () => {
    //     const formForm = form as HTMLFormElement
    //     formForm.querySelectorAll('input')?.forEach(inp => inp.value = '');
    //     localStorageClear();
    // };

    // // realizar tanto o POST como PUT
    // const handleSubmit = (e: SubmitEvent,) => {
    //     const form = e.currentTarget as HTMLFormElement;

    //     const operations = debounce(() => {

    //         const checkMethod = () => {
    //             enum method {
    //                 POST,
    //                 PUT,
    //             };
    //             if (!getDataLocalStorage('temp-produtos')) return method.POST;
    //             return method.PUT;
    //         };

    //         if (checkMethod() === 0) {

    //             const inputs = {
    //                 id: uuid(),
    //                 nome: form['nome'].value,
    //                 marca: form['marca'].value,
    //                 qtd: form['qtd'].value,
    //             };

    //             Produtos.create(inputs);
    //             clear();
    //              } else {

    //             const { id } = getDataLocalStorage('temp-produtos');

    //             const inputs = {
    //                 id: id,
    //                 nome: form['nome'].value,
    //                 marca: form['marca'].value,
    //                 qtd: form['qtd'].value,
    //             };

    //             Produtos.update(inputs);
    //             clear();
    //         };
    //     },500);

    //     operations();

    // };

    // // verifica qual operação a ser realizada
    // form.onsubmit = (e: SubmitEvent) => {
    //     e.preventDefault();
    //     console.log();
    //     if (e.submitter !== null && e.submitter.id == 'btnCancelar') handleCancel()
    //     else handleSubmit(e);
    // };

    // const handleCancel = () => {
    //     clear();
    // }

    // // resgatando dodos do localstorage e setando valores no form
    // if (getDataLocalStorage('temp-produtos')) {
    //     const { id, marca, nome, qtd } = getDataLocalStorage('temp-produtos');

    //     setTimeout(() => {

    //         if ([id, marca, nome, qtd].every(att => att !== undefined)) {
    //             form['nome'].value = nome;
    //             form['marca'].value = marca;
    //             form['qtd'].value = qtd;
    //         };
    //     }, 300);
    // };

    // form.innerHTML = `
    //     <div class="form-group">
    //         <label for="nome">Nome:</label>
    //         <input type="text" id="nome" name="nome" required>
    //     </div>
    //     <div class="form-group">
    //         <label for="marca">Marca:</label>
    //         <input type="text" id="marca" name="marca" required>
    //     </div>
    //     <div class="form-group">
    //         <label for="qtd">Quantidade:</label>
    //         <input type="number" id="qtd" name="qtd" required>
    //     </div>
    //     <div class="form-group">
    //         <button id="btnEnviar"  class="btns btn-enviar">Enviar</button>
    //         <button id="btnCancelar" class="btns btn-cancelar">Cancelar</button>
    //     </div>
    // `;
    
    return (
    <form className='form'>
            <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome"  value={nome} required />
            </div>
            <div className="form-group">
                <label htmlFor="marca">Marca:</label>
                <input type="text" id="marca" name="marca" value={marca} required />
            </div>
            <div className="form-group">
                <label htmlFor="qtd">Quantidade:</label>
                <input type="number" id="qtd" name="qtd" value={qtd} required />
            </div>
            <div className="form-group">
                <button id="btnEnviar"  className="btns btn-enviar">Enviar</button>
                <button id="btnCancelar" className="btns btn-cancelar">Cancelar</button>
            </div>
    </form>
    );
};

export default Form;