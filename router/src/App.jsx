
import React from 'react'
import {//Esto lo hacemos para no traer todas lass utilidades del paquete Router y asignarles un alias
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Base from './components/Base'
import Inicio  from './components/Inicio'

function App() {
  return (
    <Router>
      <Link to='/inicio'>Inicio</Link>
      <Link to='/'>Base</Link>
      {/* Es donde decimos que para esta ruta cargue el contenido */}
      <Switch>
        <Route exact path='/'>
            <Base></Base>
        </Route>
        {/* Ruta + Parametro con : */}
        <Route path="/inicio/:nombre/:edad">
          <Inicio></Inicio>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



// npm install react-router-dom
// Es necesario importar las rutas en este componente