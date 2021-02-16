import React, { useState } from 'react'

const Temperatura = () => {

    const [temperatura, setTemperatura] = useState(19)
    const Subir=()=>{
        setTemperatura(temperatura + 1)
    }
    const Bajar=()=>{
        setTemperatura(temperatura - 1)
    }
    return (
        <div className='container'>
            <h2>La temperatura es: {temperatura}</h2>
            <p>
                {temperatura > 21 ? 'Hace Calorcito': 'Hace Algo de frio'}
            </p>
            <button className='btn btn-danger' onClick={Subir}>Aumentar Tempreatura</button>
            <p></p>
            <button className='btn btn-success' onClick={Bajar}>Redducir Tempreatura</button>
        </div>
    )
}
export default Temperatura