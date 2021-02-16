import React, { useState } from 'react'

const Listado = () => {
    const [numeros, setNumeros]=useState([1,2,3,4,5,6])
    return (
        <div>
            <ul>
                {
                    numeros.map((item,index)=>
                    <li key={index}>{index}-{item}</li> )
                }
            </ul>
        </div>
    )
}
export default Listado

