import React,{} from 'react'

const Formulario = () => {
    return (
        
        <div className='col-6'>
            <form className='form-group'>
                <input placeholder='Introduce el nombre' className='form-control mb-3' type="text"/>
                <input placeholder='Introduce el la edad' className='form-control mb-3' type="number"/>
                <input  className='btn btn-info btn-block mb-3' type="submit"/>
            </form>
        </div>
    )
}
export default Formulario