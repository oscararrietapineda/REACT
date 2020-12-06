import React from 'react';
import './Conmutador.css';

class Conmutador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {estaActivo: true};
    
        // Este enlace es necesario para hacer que "this" funcione en el callback
        this.manejarClick = this.manejarClick.bind(this);
      }
    
      manejarClick() {
        this.setState(state => ({
           estaActivo: !state.estaActivo
        }));
      }
    
      render() {
        return (
          <button onClick={this.manejarClick}>
            {this.state.estaActivo ? 'ENCENDIDO' : 'APAGADO'}
          </button>
        );
      }
}
export default Conmutador;
