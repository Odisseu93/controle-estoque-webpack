import api from "../axios-config";
import { produtosValidationSchema } from "./schema";
import { TProduto } from "./types";

const getAll = async () => {
    try {
        const { data } = await api.get('');
        const result = produtosValidationSchema.safeParse(data);
        if (result.success) return data;
        else {
          console.error(result.error);
        }
    } catch (err) {
        console.log(err)
    }
};

const remove = async (id: string) => {
    try {
        const { data }= await api.delete(`${id}`);
        return data as TProduto;
    } catch (err) {
        console.log(err)
    }
};

const create = async (data:TProduto) => {
    try {
        api.post('',data);
    } catch (err) {
        console.log(err)
    }
};
const update = async (data:TProduto) => {
    try {
        const { id } = data;

        api.put(id,data);
    } catch (err) {
        console.log(err)
    }
};




export const Produtos = { getAll, remove, create, update }; 