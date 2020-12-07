/* The following line can be included in a src/App.scss */
import 'bootstrap/dist/css/bootstrap.min.css';
/* The following line can be included in your src/index.js or App.js file */
import './App.css';
import './css/style.css'; 
import Evaluaciones from './components/Evaluaciones/Evaluaciones';
import MenuLateral from './components/MenuLateral/MenuLateral';
import Header from './components/Header/Header';
function App() {
  return (
    <div>
       <Header />  
      
      <MenuLateral Pendientes= {2} /> 
    </div>
  );
}
export default App;
