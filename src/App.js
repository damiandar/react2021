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

function App() {
  const persona={
    nombre:"Juan",
    edad:24
  }
  return (
   
    <Router>
            <Container>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <Link className="navbar-brand"  to="/">Inicio</Link> 
            <Link className="navbar-brand"  to="/Contador">Contador</Link>
            <Link className="navbar-brand"  to="/Formulario">Formulario</Link>
            <Link className="navbar-brand"  to="/Listado">Listado</Link>
          </nav>
        </header>
        </Container>
    <main role="main"> 
      <Switch>
        <Route path="/Listado"><Listado /></Route>
        <Route path="/Contador"><Contador /></Route>
        <Route path="/Formulario"><Formulario/></Route>
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
