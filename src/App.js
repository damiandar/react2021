 import Contador from "./components/Contador";
 import Prueba from "./components/Prueba";
 import Lista from "./components/Lista";
 import Formulario from "./components/Formulario";
 import Listado from "./components/Listado";
 import Card from "./components/Card";
 import Propiedades from "./components/Propiedad";
 import { BrowserRouter as Router ,Switch,Route, Link} from "react-router-dom";
 import Footer from "./layout/Footer";
 import {Container} from "react-bootstrap"
 import FormularioEdicion from "./components/FormularioEdicion";

function App() {
  const persona={
    nombre:"Juan",
    edad:24
  }
  return (
   
    <Router>
           
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> 
            <Link className="navbar-brand"  to="/">Inicio</Link> 
            <Link className="navbar-brand"  to="/Contador">Contador</Link>
            <Link className="navbar-brand"  to="/Formulario">Formulario</Link>
            <Link className="navbar-brand"  to="/Listado">Listado</Link>
          </nav>
        </header> 
    <main role="main" className="container"> 
      <Switch>
        <Route path="/Listado"><Listado /></Route>
        <Route path="/Contador"><Contador /></Route>
        <Route path="/Formulario"><Formulario/></Route>
        <Route path="/Formis"><FormularioEdicion/></Route>
        <Route path="/">      
          <Propiedades DNI={277777} Legajo={12345} />
          <Card persona={persona}/>
          <Lista/>
          {/*  
            <Prueba/>
            <Prueba/>
            <Prueba/> 
          */}
  
          <Prueba/>
        </Route>
      </Switch>
      </main>
      <Footer/>
    </Router>
   
  );
}

export default App;
