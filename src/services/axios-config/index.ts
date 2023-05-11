import axios from 'axios';

// localmente http://localhost:3333/products/

const api = axios.create({
    baseURL: 'https://mockapi-controle-estoque.onrender.com/products'  
});

export default api
