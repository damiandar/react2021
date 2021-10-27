import React,{useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import Plantilla from './Plantilla';
import PlantillaProps from './PlantillaProps';

const FormularioEdicion = () => {
    // A custom hook that builds on useLocation to parse
// the query string for you.
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const [categoria, setCategoria] = useState({})
    const nodeCard = {
        id: 6666,
        descripcion: 'nounXXXXX'
    };
    useEffect(() => {
        var id=query.get("id");
        fetch("http://localhost:14643/api/categorias/" +id )
        .then(async (response) => {
            if (response.ok) 
                { 
                    setCategoria(await response.json()) ; 
                }
            else {
                console.log(await response.text());
              }
            ;
        })
        .catch((err) => {
            console.log(err.message);
        }); 
    },[categoria,query])
    return (
        <div>
            <p>{categoria.id}</p>
            <p>{categoria.descripcion}</p>
            <Plantilla categoria={nodeCard}/>
            <Plantilla categoria={categoria}/>
            <PlantillaProps categoria={nodeCard}/>
            <PlantillaProps categoria={categoria}/>
        </div>
    )
}

export default FormularioEdicion
