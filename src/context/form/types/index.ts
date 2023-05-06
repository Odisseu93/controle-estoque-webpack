export interface IFormData {
    id: string;
    nome: string;
    marca: string;
    qtd: number
}

export interface IFormContext {
    formData: IFormData;
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
}
