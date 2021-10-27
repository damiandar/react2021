import React from 'react'

const PlantillaProps = (cat) => {
    const categoria=cat.categoria;
    return (
        <div>
            <h2>Plantilla props</h2>
            <p>{categoria.id}</p>
            <p>{categoria.descripcion}</p>
        </div>
    )
}

export default PlantillaProps
