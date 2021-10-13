import React, {Fragment, useState} from "react";
const Contador = () => {

    const [count, setCount] = useState(0);

    const Decrementar =() =>{
        console.log("Decrementar");
        setCount(count -1);
    };
    
    return (  
        <Fragment>
            <h1>Contador</h1>
            <p>Numero de veces: {count} </p>
            <button onClick={ ()=> setCount(count +1) }  >
            Incrementar
            </button>
            <button onClick={ Decrementar }  >
            Decrementar
            </button>
        </Fragment>
    );
}
 
export default Contador;
 