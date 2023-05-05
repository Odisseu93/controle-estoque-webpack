import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header";
import './styles/globals.scss';
import ModalProvider from './context/modal/provider';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
    <>
        <ModalProvider>
            <Header />
            <App />
        </ModalProvider>
    </>
);


