import React from 'react';
import './Listado.css';

class Listado extends React.Component {
      
    constructor(props) {
        super(props);
        this.state = {i: this.props.i};

        this.elements = [];

        for (let i = 0; i < 5; i++) {
            //this.elements.push(<div><button onClick={(e) => this.eliminarFila(i, e)}>Eliminar Fila</button><br/></div>);
            this.elements.push(<div><button onClick={this.eliminarFila.bind(this, i)}>Eliminar Fila</button><br/></div>);
       };

        // Este enlace es necesario para hacer que "this" funcione en el callback
        this.eliminarFila = this.eliminarFila.bind(this);
        
      }
    
      eliminarFila(i, e) {
        alert(i);
      }
    
      render() {
        return (
            <div>
                <h1>Ejemplo Pasando Parámetros a Escuchadores de Eventos React</h1>
                { this.elements}
            </div>
        );
      }
}
export default Listado;
