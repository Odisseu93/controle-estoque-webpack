const THead = () => {

    const thead = document.createElement('thead');
    thead.className = 'topico';

    for(const atributo of ['ID', 'Nome', 'Marca', 'Qtd', 'Opções']) {
        
        const th = document.createElement('th');

        th.textContent = atributo;

        thead.appendChild(th);
    }

    return thead;
}



export default THead;