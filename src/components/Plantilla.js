import React,{useState,useEffect} from 'react'

const Plantilla = (categoria) => {
   
    const [categoria2, setCategoria] = useState(categoria.categoria)
    return (
        <div>  
            <h2>Plantilla use state</h2>
            <p>Categoria 2:{categoria2.id}</p>
            <p>Categoria 2:{categoria2.descripcion}</p>
        </div>
    )
}

export default Plantilla
