import React, { Fragment,useState,useRef } from 'react';

const Formulario = () => {
    const [campos, setCampos] = useState({
      id:0,
      descripcion:'', 
    });
    const form = useRef(null);
    const cambioValoresHandle=(evento)=>{
        console.log(evento.target.value);
        setCampos({ 
            ...campos, 
            [evento.target.name]: evento.target.value
        })
    };

    const submit = e => {
        e.preventDefault(); 
        var data= JSON.stringify({ campos });
        console.log(data);
        try {
        fetch("http://localhost:14643/api/categorias", {
            crossDomain:true,
            method: "POST", 
            headers: {'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*"
                      
            }, 
            mode:'cors',
            body: JSON.stringify({ id: campos.id, descripcion: campos.descripcion }),
          }); 
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
        <form ref={form} onSubmit={submit}>
          {
   //<input type="text" placeholder="Precio"  name="Precio"  onChange={cambioValoresHandle}></input>
   //<input type="text" placeholder="Stock"  name="Stock"  onChange={cambioValoresHandle}></input>
   //<input type="text" placeholder="Nombre"  name="Nombre"  onChange={cambioValoresHandle}></input>
  
          }
            <input type="text" placeholder="Descripcion"    name="descripcion" onChange={cambioValoresHandle}></input>
          <button type="submit" >Enviar</button>
        </form>
        <h3> - {campos.descripcion} </h3>
        </Fragment>
    );
}
 
export default Formulario;