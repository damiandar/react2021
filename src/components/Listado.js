import React,{useState,useEffect} from 'react'

const Listado = () => {
    const [todos, setTodos] = useState([]);
  
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

            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td><td>Descripción</td>
                    </tr>
                </thead>
                <tbody>
                {   
                    todos.map((item) => {
                        return <tr key={item.id}><td> {item.id}</td><td> {item.descripcion}</td></tr>
                    }) 
                }
                </tbody>
            </table>
        </div>
    )
}

export default Listado
