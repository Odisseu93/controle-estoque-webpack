import z from  'zod';
import {ProdutoObject} from '../schema';


export type TProduto = z.infer<typeof ProdutoObject>;