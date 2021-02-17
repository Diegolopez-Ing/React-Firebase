import React, { useState } from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {
    const [nombre, setNombre] = useState('')
    const [listaDeNombre, setlistaDeNombre] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const addNombre = (e) => {
        e.preventDefault()
        if (!nombre.trim()) {
            setError('El campo Nombre esta vacío')
            return
        }
        const nuevoNombre = {
            id: uniqid(),
            tituloNombre: nombre
        }
        setlistaDeNombre([...listaDeNombre, nuevoNombre])
        setNombre('')
        setError(null)
    }

    const deletNombre = (id) => {
        const nuevaArray = listaDeNombre.filter(item => item.id !== id)
        setlistaDeNombre(nuevaArray)

    }

    const editar = (item) => {
        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }

    const editarNombre = (e) => {
        e.preventDefault()
        if (!nombre.trim()) {
            setError('El campo Nombre esta vacío')
            return
        }
        const nuevoArray = listaDeNombre
            .map(listado => listado.id === id ? { id: id, tituloNombre: nombre } : listado)
        setlistaDeNombre(nuevoArray)
        setModoEdicion(false)
        setNombre('')
        setError(null)

    }




    return (
        <div>
            <h2>Aplicación de Crud Básica</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de Nombres</h2>
                    <ul className='list-group'>
                        {
                            listaDeNombre.map(lista =>
                                <li key='{lista.id}' className='list-group-item'>
                                    {lista.tituloNombre}
                                    <button
                                        className='btn btn-danger float-right' onClick={() => { deletNombre(lista.id) }}
                                    >
                                        Borrar
                                    </button>
                                    <button
                                        className='btn btn-info float-right' onClick={() => { editar(lista) }}
                                    >
                                        Editar
                                    </button>
                                </li>

                            )
                        }

                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={modoEdicion ? editarNombre : addNombre} className='form-group'>
                        <input
                            onChange={(e) => { setNombre(e.target.value) }}
                            className='form-control mb-3'
                            type="text"
                            placeholder='Introduce un nombre'
                            value={nombre}
                        // required='enabled'

                        />
                        <input
                            type="submit"
                            value={modoEdicion ? 'EDITAR NOMBRE' : 'REGISTRE NOMBRE'}
                            className='btn btn-info btn-block'
                        />
                    </form>
                    {
                        error != null ?
                            (
                                <div class="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            ) :
                            (
                                <div>
                                    
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Listadonombres
