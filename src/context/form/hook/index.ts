import { useContext } from "react"
import FormContext from ".."


const useFormData = () => {
    const context = useContext(FormContext);

    return context;
};

export default useFormData

