import React from 'react';
import './App.css';
import Publicación from './componentes/Publicación/Publicación';


function Aviso(props) {
return <h1>El nombre de la persona {props.nombre} y su edad {props.edad} han sido recibidos.</h1>;
}

function App() {
  return (
    <div>
      <Aviso nombre="José" edad="36"/>
      <Aviso nombre="Rebeca" edad="25"/>
      <Aviso nombre="Carlos" edad="50"/>

      <br/>

      <Publicación autor={{nombre: 'José', puesto:'editor'}} texto="Publicación de prueba" fecha="01/01/2020"/>

    </div>
  );
}

export default App;
