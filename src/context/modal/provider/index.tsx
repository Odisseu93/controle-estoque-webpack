import React, { useState } from "react";
import { ReactNode } from "react";
import ModalContext from "..";

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </ModalContext.Provider>
    )
};

export default ModalProvider;