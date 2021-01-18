import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './NavBar.css';
import UsuarioGet from '../Usuario/UsuarioGet';
import Evaluaciones from '../Evaluaciones/Evaluaciones';
export default function NavBar() {
  return (
    <Router>
      <div>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
  <ul class="navbar-nav">
    <li class="nav-item active"> 
      <Link  className="nav-link" to="/">Inicio</Link> 
    </li>
    <li class="nav-item">
    <Link  id="lPerfil" className="nav-link" to="/Perfil">Perfil</Link>
    </li>
    <li class="nav-item">
    <Link className="nav-link" to="/Pendientes">Pendientes</Link>
    </li>
    
  </ul>
</nav>
<div className="navbar navbar-default">
<div className="container">
        <div className="navbar-header">
           
          <a className="navbar-brand" href="">Sistema de Evaluaciones</a>
        </div>
        </div>
</div>

        <Switch>
          <Route path="/Perfil">
            <Perfil />
          </Route>
          <Route path="/Pendientes">
            <Pendientes />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Inicio() { 
   return <div></div>;
}
function Perfil() {
   return <div> <UsuarioGet />  </div>;
}

function Pendientes() {
  return <div>     <div class="col-9"> 
  <div class="panel panel-default">

 <div class="panel-body">
 <div class="row">
 <Evaluaciones /> 
 </div>

  </div> 
</div>
</div> </div>;
}

 