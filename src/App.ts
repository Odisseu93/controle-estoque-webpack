import Form from './components/Form';
import Table from './components/Table';


const App = () => {

    const div = document.createElement('div');


    div.append(Table(), Form());

    return div;

}

export default App;