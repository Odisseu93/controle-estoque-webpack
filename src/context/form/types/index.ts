export interface FormData {
    id: string;
    nome: string;
    marca: string;
    qtd: number
}

export interface FormContextType {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}
