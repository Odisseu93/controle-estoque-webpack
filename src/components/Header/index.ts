import './styles.scss'

const Header = () => {

    const header = document.createElement('header');
    header.className = 'controle';

    header.innerHTML = `
    <h1 class="titulo">Controle de estoque</h1>
    <div class="inputs">
        <button class="adicionar">+</button>
        <input class="busca" type="search">
    </div>
    `

    return header;

}

export default Header;