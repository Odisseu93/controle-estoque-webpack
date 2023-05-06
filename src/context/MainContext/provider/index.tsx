import React, { ReactNode, useState } from "react";
import { MainContext } from "..";
import { IFormData } from "../../form/types";
import { IAlert } from "../../../components/Alert/types";

const MainContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [formData, setFormData] = useState<IFormData>({} as IFormData);
    const [showModal, setShowModal] = useState(false);
    const [render, setRender] = useState(0);
    const [alertData, setAlertData] = useState<IAlert>({} as IAlert);
    const [alertRender, setAlertRender] = useState(0)

    return (
        <MainContext.Provider value={{
            formData,
            setFormData,
            showModal,
            setRender,
            render,
            setShowModal,
            alertData,
            setAlertData,
            alertRender,
            setAlertRender
        }}>
            {children}
        </MainContext.Provider>
    )
};

export default MainContextProvider;