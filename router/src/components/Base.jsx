import React, { useState,useEffect } from "react"


const Base = () => {

    const [nombre, setNombre] = useState('Diego')

    useEffect(() => {//Le da un timepo de espera a la renderizacion de la página y luego hará lo de adentro 
        setTimeout(()=>{
            setNombre('Lopez')
        },2000)
        
    })

    return (
        <div>
            <h1>Pagina de Base</h1>
            {nombre}
        </div>
    )
}
export default Base