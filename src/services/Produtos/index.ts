import api from "../axios-config";
import { ProdutoObject, produtosValidationSchema } from "./schema";
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

const create = async (data: TProduto): Promise<TProduto | Error> => {
    try {
        const result = ProdutoObject.safeParse(data);

        if (result.success) {
            const resp = await api.post('', data);
            return resp.data;
        }
        else {
            console.error(result.error);
            return result.error;
        }
    } catch (err) {
        console.log(err)
        return new Error((err as { message: string }).message);
    }
};

const update = async (data: TProduto) => {
    try {
        const { id } = data;
        const result = ProdutoObject.safeParse(data);

        if (result.success) {
            const resp = await api.put(id, data);;
            return resp.data;
        }
        else {
            console.error(result.error);
            return result.error;
        }
    } catch (err) {
        console.log(err)
        return new Error((err as { message: string }).message);
    }
};




export const Produtos = { getAll, remove, create, update }; 