import React from 'react';
import './MenuLateral.css'; 
import Elemento from './Elemento';
/**
 * MenuLateral
 * Props: 
 * Terminados:Cantidad de evaluaciones que el usuario ha completado
 * Pendientes:Cantidad de evaluaciones que el usuario tiene pendientes
 * State:
 * CantidadEvaluaciones: Guarda los valores de las evaluaciones en caso que en el props no venga la evaluacion esta sera 0
 * Terminados: Se iguala al props de terminados
 * Pendientes:Cantidad de evaluaciones que el usuario tiene pendientes
 * 
 * Renderizado: Cuando la cantidad sea 0 , el elemento no sera renderizado
 */
class MenuLateral extends React.Component {
  constructor(props) {
    super(props); // Invoca al constructor base
    this.state = {CantidadEvaluaciones: {Pendientes:0,Terminadas:0}};
  }

  
  componentDidMount() { 
    let Pendientes = typeof this.props.Pendientes === "undefined" ? 0 : this.props.Pendientes;
    let Terminadas = typeof this.props.Terminadas === "undefined" ? 0 : this.props.Terminadas;
    this.setState({
      CantidadEvaluaciones:  {Pendientes:Pendientes,Terminadas:Terminadas}
    });
 
  }

  componentWillUnmount() {
 
  }

  render() {
    return (
      <div> 
          <section id="main">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
              <div class="list-group">
              <a href="index.html" class="list-group-item active main-color-bg">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Status
              </a>
              {this.state.CantidadEvaluaciones.Pendientes === 0 ? null :
                <Elemento  Titulo={'Pendientes'}  Cantidad={this.state.CantidadEvaluaciones.Pendientes} />
              }
              {this.state.CantidadEvaluaciones.Terminadas === 0 ? null :
                 <Elemento  Titulo={'Terminados'}  Cantidad={this.state.CantidadEvaluaciones.Terminadas} />
              }
            </div>
            </div>
            </div>
            </div>
            </section> 
      </div>
    );
  }
}
     
 
export default MenuLateral;
