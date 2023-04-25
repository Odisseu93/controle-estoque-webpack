import App from "./App";
import Header from "./components/Header";
import './styles/globals.scss';

document.querySelector('#root')!.append(
    Header(),
    App()
    );


