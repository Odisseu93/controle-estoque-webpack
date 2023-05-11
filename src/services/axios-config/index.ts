import axios from 'axios';

// localmente http://localhost:3333/products/

const api = axios.create({
    baseURL: 'http://localhost:3333/products/'  
});

export default api