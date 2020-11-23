import logo from './logo.svg';
import './App.css';
import Evaluaciones from './components/Evaluaciones/Evaluaciones';
function App() {
  return (
    <div>
      {/* <Publicación autor={{nombre: 'José', puesto:'editor'}} texto="Publicación de prueba" fecha="01/01/2020"/> */}
      <Evaluaciones  codigo="1"  descripcion="Publicación de prueba" fechaLimite="20/12/2020"/>
    </div>
  );
}
export default App;
