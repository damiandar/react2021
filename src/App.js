 import Contador from "./components/Contador";
 import Prueba from "./components/Prueba";
 import Lista from "./components/Lista";
 import Formulario from "./components/Formulario";
 import Card from "./components/Card";
  import Propiedades from "./components/Propiedad";

function App() {
  const persona={
    nombre:"Juan",
    edad:24
  }
  return (
    <div >
      <h1>Hola Mundo</h1>
      <Propiedades DNI={277777} Legajo={12345} />
      <Card persona={persona}/>
      <Contador />
      <Lista/>
      <Prueba/>
      <Prueba/>
      <Prueba/>
      <Prueba/>
      <Formulario/>
    </div>
  );
}

export default App;
