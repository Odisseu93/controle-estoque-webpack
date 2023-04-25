import api from "../axios-config";

const getAll = async () => {
    try {
        const { data } = await api.get('');
        return data;
    } catch (err) {
        console.log(err)
    }
};



export const Produtos = { getAll }; 