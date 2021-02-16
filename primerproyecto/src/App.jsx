import { useState } from 'react';
import './App.css';
// import Hola from './components/Hola'
import Contador from './components/contador'

function App() {

 
  return (
    <div className="App">
      <h1>Nuestro primer Proyecto</h1>
      {/* <Hola></Hola> */}
      <Contador></Contador>
      <Contador></Contador>
    </div>
  );
}

export default App;
