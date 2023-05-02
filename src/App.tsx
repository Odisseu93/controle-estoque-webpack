import React from 'react';
import Form from './components/Form';
import Table from './components/Table';
import FormContextProvider from './context/form/provider';


const App = () => {
return (
    <>
    <FormContextProvider>
    <Table />
    <Form />
    </FormContextProvider>
    </>
)


}

export default App;