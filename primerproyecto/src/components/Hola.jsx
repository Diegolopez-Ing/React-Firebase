import React from/*,{Fragment}*/ 'react';

function Hola() {
    let saludo='Hola Diego!!!'
    return (//Se puede hacer uso de {Fragment} en lugar de {div} para encerrar codigos
        <div>
            <h2>Saluden a Diego, {saludo}{2*3}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eos doloremque delectus provident unde quaerat. Amet iure aliquid distinctio quisquam sint nemo similique laudantium deleniti voluptates ad! Minima, quibusdam minus.</p>
        </div>)
}
export default Hola