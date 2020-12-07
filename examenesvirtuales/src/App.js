/* The following line can be included in a src/App.scss */
import 'bootstrap/dist/css/bootstrap.min.css';
/* The following line can be included in your src/index.js or App.js file */
import './App.css';
import './css/style.css'; 
import MenuLateral from './components/MenuLateral/MenuLateral';
import Header from './components/Header/Header';
import Evaluaciones from './components/Evaluaciones/Evaluaciones';
function App() {
  return (
    <div>
      
       <Header /> 
        
    <section id="main">
          <div class="container">
            <div class="row">
      <MenuLateral Pendientes= {2} ElementosAdicionales={[{id:1,Titulo: 'Ciencias',Cantidad:0},{id:2,Titulo: 'Bases de Datos',Cantidad:10}]} /> 
      <div class="col-9"> 
			   <div class="panel panel-default">
			 
			  <div class="panel-body">
			  <div class="row">
        <Evaluaciones /> 
			  </div>
			 
         </div> 
      </div>
      </div> 
      </div>
      </div>
      </section>
    </div>
  );
}
export default App;
