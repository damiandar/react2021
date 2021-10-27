import React,{useState,useEffect} from 'react'; 
//import ModalCategoria from './ModalCategoria';
import { useHistory } from "react-router-dom";

const Listado = () => {
    const [todos, setTodos] = useState([]);
    //const [modal, setModal] = useState(false);
    let history = useHistory();

    const seleccionarCategoria=(categ, caso)=>{
        //setModal(true); 
        //history.push("/Formis/" + categ.id );
        history.push("/Formis?id=" + categ.id );
        //(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
        console.log(categ);
    }

    useEffect(() => {
      fetch("http://localhost:14643/api/categorias")
        .then(async (response) => {
            if (response.ok) 
                {
                    setTodos(await response.json())  
                }
            else {
                console.log(await response.text());
              }
            ;
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (
        <div>
            {
            //<ModalCategoria show={modal} />
            }
          
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td><td>Descripción</td>
                    </tr>
                </thead>
                <tbody>
                {   
                    todos.map((cat) => {
                        return <tr key={cat.id}>
                                <td> {cat.id}</td>
                                <td> {cat.descripcion}</td>
                                <td><button  className="btn btn-primary" 
                                    onClick={()=>seleccionarCategoria(cat, 'Editar')}>Editar</button>
                                </td>
                            </tr>
                    }) 
                }
                </tbody>
            </table>
        </div>
    )
}

export default Listado
