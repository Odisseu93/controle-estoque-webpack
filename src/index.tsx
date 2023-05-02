import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header";
import './styles/globals.scss';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
    <>
        <Header />
        <App />
    </>
);


