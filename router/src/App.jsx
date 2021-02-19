
import React from 'react'
import Base from './components/Base'
import Inicio from './components/Inicio'
import Usuarios from './components/Usuarios'
import Usuario from './components/Usuario'


import {//Esto lo hacemos para no traer todas lass utilidades del paquete Router y asignarles un alias
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import axios from 'axios'


function App() {


  return (
    <Router>
      <Link to='/inicio'>Inicio</Link>
      <Link to='/base'>Base</Link>
      <Link to='/'>Usuarios</Link>
      <Link to='/usuario'>Usuario</Link>
      {/* Es donde decimos que para esta ruta cargue el contenido */}
      <Switch>

        {/* Ruta + Parametro con : */}
        <Route exact path='/base'>
          <Base></Base>
        </Route>


        <Route path="/inicio/:nombre/:edad">
          <Inicio></Inicio>
        </Route>

        <Route exact path="/">
          <Usuarios></Usuarios>
        </Route>

        <Route path="/usuario/:id">
          <Usuario></Usuario>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;



// npm install react-router-dom
// Es necesario importar las rutas en este componente