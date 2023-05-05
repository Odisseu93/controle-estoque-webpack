import React from 'react';
import Table from './components/Table';
import FormContextProvider from './context/form/provider';
import { RenderProvider } from './context/render/provider';
import Modal from './components/Modal';


const App = () => {
return (
    <>
    <FormContextProvider>
     <RenderProvider>   
    <Table />
    <Modal />
    </RenderProvider> 
    </FormContextProvider>
    </>
)


}

export default App;