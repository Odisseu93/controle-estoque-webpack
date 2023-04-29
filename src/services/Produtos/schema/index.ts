import z from 'zod';


const ProdutoObject = z.object({
    id: z.string().max(4, { message: 'O [id] deve ser uma string até 4 caracteres' }),
    nome: z.string().max(30, { message: 'O [nome] deve ser uma string até 30 caracteres' }),
    marca: z.string().max(15, { message: 'A [marca] deve ser uma string até 15 caracteres' }),
    qtd: z.number().nonnegative({ message: 'a quantidade não pode ser negativa' })
})

const produtosValidationSchema = z.array(ProdutoObject);


export  {ProdutoObject, produtosValidationSchema};
