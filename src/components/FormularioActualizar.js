import React, { Fragment,useState } from 'react';

const FormularioActualizar = () => {
    const [campos, setCampos] = useState({
        Nombre:'',
        Descripcion:'',
        Stock:'',
        Precio:'',
    });
    const cambioValoresHandle=(evento)=>{
        console.log(evento.target.value);
        setCampos({ 
            ...campos, 
            [evento.target.name]: evento.target.value
        })
    };

    const crearProducto=()=>{
        try{
            console.log(campos);
        }
        catch{
            console.log(campos);
        }
        return null;
        //postProducto(campos.Nombre,campos.Stock,campos.Descripcion,campos.Precio);
    }
    const postProducto=(Nombre, Stock,Descripcion,Precio)=>{
        try {
          const respuesta = fetch("http://localhost:14643/api/productos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre: Nombre,
                stock:Stock,
                descripcion:Descripcion,
                precio:Precio,
            }),
          });
          console.log(respuesta);
          return respuesta;
        } 
        catch (err) {
          console.error("error", err);
          alert(err.message);
          throw new Error(err.message);
        }
      }
    /*
    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);*/
    return (  
        <Fragment>
        <form>
            <input type="text" placeholder="Descripcion"    name="Descripcion" onChange={cambioValoresHandle}></input>
            <input type="text" placeholder="Precio"  name="Precio"  onChange={cambioValoresHandle}></input>
            <input type="text" placeholder="Stock"  name="Stock"  onChange={cambioValoresHandle}></input>
            <input type="text" placeholder="Nombre"  name="Nombre"  onChange={cambioValoresHandle}></input>
            <button onClick={crearProducto} >Enviar</button>
        </form>
        <h3>{campos.Nombre} - {campos.Descripcion} </h3>
        </Fragment>
    );
}
 
export default FormularioActualizar;