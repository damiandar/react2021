import React, { Fragment } from 'react';
const Propiedades = (props) => {
    return (  
        <Fragment>
           <p> {props.DNI}</p>
           <p> {props.Legajo}</p>
        </Fragment>
    );
}
 
export default Propiedades;