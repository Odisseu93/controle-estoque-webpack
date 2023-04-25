const Header = () => {

    const header = document.createElement('header');
    header.className = 'controle';

    header.innerHTML = `
    <h1 class="titulo">Controle de estoque</h1>
    <button class="adicionar">+</button>
    <input class="busca" type="search">
    `

    return header;

}

export default Header;