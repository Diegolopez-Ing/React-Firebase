import { useState } from 'react';
import './App.css';
// import Hola from './components/Hola'
import Contador from './components/contador'
import Listado from './components/Listado'
import Temperatura from './components/Temperatura'

function App() {

 
  return (
    <div className="App">
      <h1>Nuestro primer Proyecto</h1>
      {/* <Hola></Hola> */}
      {/* <Contador></Contador> */}
       {/* <Listado></Listado> */}
      <Temperatura></Temperatura>
    </div>
  );
}

export default App;
