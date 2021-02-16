import React, { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const Validar=(event)=>{
        event.preventDefault()
        if (!nombre.trim()||!edad.trim() ) {
            console.log('No deben haber campos vacios');
            return
            
        }
        else{
            console.log('Eh pulsado el boton');

        }
    }

    return (

        <div>
            <form onSubmit={Validar} className='form-group'>
                <input
                    placeholder='Introduce el nombre'
                    className='form-control mb-3'
                    type="text"
                    onChange={(e)=>{setNombre(e.target.value)}}
                />
                <input
                    placeholder='Introduce el la edad'
                    className='form-control mb-3'
                    type="text"
                    onChange={(e)=>{setEdad(e.target.value)}}
                />
                <input
                    className='btn btn-info btn-block mb-3'
                    type="submit"
                />
            </form>
        </div>
    )
}
export default Formulario