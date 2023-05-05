import React from "react";
import { TModal } from "./types";

const ModalContext = React.createContext<TModal>({
    showModal:  false,
    setShowModal: ()=> {},
});

export default ModalContext;