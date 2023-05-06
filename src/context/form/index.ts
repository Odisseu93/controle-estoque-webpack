import * as React from "react";
import { IFormContext } from "./types";


const FormContext = React.createContext<IFormContext>({
    formData: {
        id: '',
        nome: '',
        marca: '',
        qtd: 0,
    },
    setFormData: ()=>{},

}); 

export default FormContext;