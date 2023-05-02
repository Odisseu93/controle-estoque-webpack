import * as React from "react";
import { FormContextType } from "./types";


const FormContext = React.createContext<FormContextType>({
    formData: {
        id: '',
        nome: '',
        marca: '',
        qtd: 0,
    },
    setFormData: ()=>{},

}); 

export default FormContext;