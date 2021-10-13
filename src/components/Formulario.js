import React, { Fragment,useState } from 'react';

const Formulario = () => {
    const [campos, setCampos] = useState({
        nombre:'',
        apellido:''
    });
    const cambioValoresHandle=(evento)=>{
        console.log(evento.target.value);
        setCampos({ 
            ...campos, 
            [evento.target.name]: evento.target.value
        })
    };
    return (  
        <Fragment>
        <form>
            <input type="text" placeholder="Insertar nombre"    name="nombre" onChange={cambioValoresHandle}></input>
            <input type="text" placeholder="Ingresar apellido"  name="apellido"  onChange={cambioValoresHandle}></input>
            <button type="submit">Enviar</button>
        </form>
        <h3>{campos.nombre} - {campos.apellido} </h3>
        </Fragment>
    );
}
 
export default Formulario;