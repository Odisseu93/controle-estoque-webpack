import React, { ReactNode, useState } from "react"
import FormContext from ".."
import useFormData from "../hook";
import { FormData } from "../types";


const FormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [ formData, setFormData ] = useState<FormData>({} as FormData);

    return (
    <FormContext.Provider value={{ formData, setFormData }}>
        {children}
    </FormContext.Provider>)
};

export default FormContextProvider;

