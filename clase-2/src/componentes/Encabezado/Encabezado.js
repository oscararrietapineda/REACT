import React from 'react';
import './Encabezado.css';

function Encabezado(props) {
    return (
        <div className="Encabezado">
          <h1>{props.título}:</h1>
          <h2>{props.autor.nombre}</h2>
          <h3>{props.autor.puesto}</h3>
        </div>
    );
  }
  
export default Encabezado;