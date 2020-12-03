import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reloj from './componentes/Reloj/Reloj';
import Eventos from './componentes/Eventos/Eventos';
import Conmutador from './componentes/Conmutador/Conmutador';
import Listado from './componentes/Listado/Listado';

import * as serviceWorker from './serviceWorker';



// Ejemplo 1
//function Iteración() {
    //ReactDOM.render(
      //<Reloj />, document.getElementById('root')
    //);
//}  
//setInterval(Iteración, 1000);

// Ejemplo 2
//ReactDOM.render(<App />, document.getElementById('root'));

// Ejemplos de Eventos
//ReactDOM.render(<Eventos />, document.getElementById('root'));

// Ejemplos de Eventos - Conmutador
//ReactDOM.render(<Conmutador />, document.getElementById('root'));

// Ejemplo Pasando Parámetros a Escuchadores de Eventos
ReactDOM.render(<Reloj />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();