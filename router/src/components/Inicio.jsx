import React from 'react'
import{useParams} from 'react-router-dom'


export const Inicio = () => {

    const{nombre,edad}=useParams()

    return (
        <div>
            <h1>Pagina de Inicio</h1>
            <p>{nombre}</p>
            <p>{edad}</p>
            
        </div>
    )
}
export default Inicio