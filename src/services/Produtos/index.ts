import api from "../axios-config";

const getAll = async () => {
    try {
        const { data } = await api.get('');
        return data;
    } catch (err) {
        console.log(err)
    }
};

const remove = async (id: string) => {
    try {
        const { data } = await api.delete(`${id}`);
        return data;
    } catch (err) {
        console.log(err)
    }
};

const create = async (data:any) => {
    try {
        api.post('',data);
    } catch (err) {
        console.log(err)
    }
};




export const Produtos = { getAll, remove, create }; 