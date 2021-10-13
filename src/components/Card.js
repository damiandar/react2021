import React, { Fragment } from 'react';
const Card = ({persona}) => {
    return (  
        <Fragment>
            <p>{persona.nombre}</p>
            <p>{persona.edad}</p>
        </Fragment>
     );
}
 
export default Card;