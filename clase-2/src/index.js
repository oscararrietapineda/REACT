import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Ejemplo 1
//const elemento1 = <h1>Hola Mundo!</h1>;
//ReactDOM.render(elemento1, document.getElementById('root'));

// Ejemplo 2
// function presentarHoraActual() {
//     const elemento = (
//       <div>
//         <h1>Hola Mundo!</h1>
//         <h2>La hora actual es {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(elemento, document.getElementById('root'));
//   }
  
//   setInterval(presentarHoraActual, 1000);
  
// Ejemplo 3

// const elementoDOM = <div/>;

// const elementoUsuario = <Saludo nombre="María"/>;

// function Saludo(props) {
//     return <h1>Bienvenido(a) {props.nombre}</h1>;
// }
 
//   ReactDOM.render(
//     elementoUsuario,
//     document.getElementById('root')
//   );


  
// // Ejemplo 4
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Equivalente a
// class Saludo extends React.Component {
//     render() {
//       return <h1>Bienvenido(a) {this.props.nombre}</h1>;
//     }
//   }
  
// function AppNueva() {
//     return (
//       <div>
//         <Saludo nombre="José" />
//         <Saludo nombre="Francisco" />
//         <Saludo nombre="María" />
//       </div>
//     );
//   }
  
// ReactDOM.render(
//     <AppNueva />,
//     document.getElementById('root')
// );

// Ejemplo 4





  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
