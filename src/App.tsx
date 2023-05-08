import React from 'react';
import './styles/app.scss';
import Table from './components/Table';
import Modal from './components/Modal';
import { Alert } from './components/Alert';



const App = () => {
    return (
        <div className='app'>
            <Table />
            <Modal />
            <Alert />
        </div>
    )
};

export default App;