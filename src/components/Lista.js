import React,{ useState,Fragment} from 'react';
const Lista = () => {
    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5]);
    const [numero, setnumero] = useState(5);
    const agregarElemento =()=>{
        setnumero(numero +1)
        setArrayNumero([...arrayNumero,numero])
    };
    return (
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento} >Agregar numero</button>
            <div>
            {
                /*arrayNumero.map((item) => {
                  return <p>{item}</p>
                })*/
                arrayNumero.map((item,index) => {
                    return <p key={index} >{item}</p>
                  })
            }
            </div>
        </Fragment>
      );
}
 
export default Lista;
 