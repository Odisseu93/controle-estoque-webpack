import { useContext } from "react";
import ModalContext from "..";

const useModal = ()=> {
    const { showModal, setShowModal } = useContext(ModalContext);

    return { showModal, setShowModal };
};

export default useModal;