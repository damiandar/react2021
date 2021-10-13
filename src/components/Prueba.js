import React from 'react';

const Prueba = () => {
    const mensaje='Componente prueba';
    const temperatura=31;
    return ( 
        <div>
            {mensaje}
            <p>
            {
                temperatura>18 ? "Frio" : "Calor"
            }
            </p>
        </div>
     );
}
 
export default Prueba;