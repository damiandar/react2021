import React, { Fragment } from 'react';
const Propiedades = (propiedades) => {
    return (  
        <Fragment>
           <p> {propiedades.DNI}</p>
           <p> {propiedades.Legajo}</p>
        </Fragment>
    );
}
 
export default Propiedades;