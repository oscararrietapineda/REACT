import React from 'react';
import './Eventos.css';

function activarMensaje(e) {
        e.preventDefault();
        alert('El botón fue clikeado 2.');
      }

class Eventos extends React.Component {

  render() {
    return (
      <div>
      <h1>Ejemplo React</h1>
      <button onClick={activarMensaje}>Activar</button>
     </div>
    );
  }
}
export default Eventos;
