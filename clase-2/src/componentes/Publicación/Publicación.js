import React from 'react';
import './Publicación.css';
import Encabezado from '../Encabezado/Encabezado';

function Publicación(props) {
    return (
      <div>
        <Encabezado título="Publicación" autor={props.autor}/>
        {/* <div className="Encabezado">
          <h1>Publicación:</h1>
          <h2>{props.autor.nombre}</h2>
          <h3>{props.autor.puesto}</h3>
        </div> */}
        <div className="Contenido">
          {props.texto}
        </div>
        <div className="Pie">
          {props.fecha}
        </div>
      </div>
    );
  }
  
export default Publicación;
