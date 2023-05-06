import { useContext } from "react";
import { MainContext } from "..";

export const UseMainContext = ()=> {
    const context = useContext(MainContext);

    return context;
};