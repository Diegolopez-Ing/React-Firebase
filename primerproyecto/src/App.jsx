import { useState } from 'react';
import './App.css';
// import Hola from './components/Hola'
import Contador from './components/contador'
import Formulario from './components/Formulario';
import Listado from './components/Listado'
import Temperatura from './components/Temperatura'

function App() {

 
  return (
    <div className="App">
      <h1>Nuestro primer Proyecto</h1>
      {/* <Hola></Hola> */}
      {/* <Contador></Contador> */}
       {/* <Listado></Listado> */}
      {/* <Temperatura></Temperatura> */}
      <Formulario></Formulario>
    </div>
  );
}

export default App;
