
import React from 'react'
import {//Esto lo hacemos para no traer todas lass utilidades del paquete Router y asignarles un alias
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* Es donde decimos que para esta ruta cargue el contenido */}
      <Switch>
        <Route path="/inicio">
          Estas en Inicio
        </Route>
        <Route path='/'>
            Esta es la url BASE
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



// npm install react-router-dom
// Es necesario importar las rutas en este componente