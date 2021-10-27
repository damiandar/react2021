import React, { Fragment,useState } from 'react'
import {Modal} from "react-bootstrap";

const ModalCategoria = (show,categoriaInicial) => {
   const [mostrar, setMostrar] = useState(show);
    const [categoria, setCategoria] = useState(categoriaInicial);
    
    const cambioValoresHandle=(evento)=>{
        console.log(evento.target.value);
        setCategoria({ 
            ...categoria, 
            [evento.target.name]: evento.target.value
        })
    };
    const handleClose = () => null; //setShow(false);
    const handleShow = () => null; //setShow(true);
    
    return (
        
        <Fragment> 

            <button variant="primary" onClick={handleShow}>
            Abrir modal {mostrar}
            </button>
        <Modal show={mostrar}  onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar categoria</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <input type="text" placeholder="Numero" name="id" onChange={cambioValoresHandle}></input>
            <input type="text" placeholder="Descripcion" name="descripcion" onChange={cambioValoresHandle}></input>
            </Modal.Body>
            <Modal.Footer>
            <button variant="secondary" onClick={handleClose}>
                Cerrar
            </button>
            <button variant="primary" onClick={handleClose}>
                Guardar
            </button>
        </Modal.Footer>
      </Modal>
        </Fragment>
    )
}

export default ModalCategoria
