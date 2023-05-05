import React from 'react';
import Form from './components/Form';
import Table from './components/Table';
import FormContextProvider from './context/form/provider';
import { RenderProvider } from './context/render/provider';


const App = () => {
return (
    <>
    <FormContextProvider>
     <RenderProvider>  
    <Table />
    <Form />
    </RenderProvider> 
    </FormContextProvider>
    </>
)


}

export default App;