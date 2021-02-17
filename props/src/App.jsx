import Bienvenida from "./components/Bienvenida";
import Cards from "./components/Cards";


function App() {
  return (
    <div className="container">
      <h1>Propiedades de los componentes</h1>
      {/* <Bienvenida nombre='Diego'></Bienvenida>
      <Bienvenida  nombre='Sergio'></Bienvenida>
      <Bienvenida  nombre='Luisa'></Bienvenida>
      <Bienvenida  nombre='Mario'></Bienvenida> */}


      <hr />
      <div className="row">
        <div className="col">
          <Cards
            imagen='https://lh3.googleusercontent.com/proxy/bvLPyMrAMhaizcZkTcek0AxVfLne74uyocwbRMK_5BkGApGwbgGLPaDCHpjte90oOx4Bl8D72tofXAYU16M1ToIsuG_sVDZl'
            titulo='Titulo Card 1'
            texto='texto de la Card 1'
          />
        </div>
        <div className="col">
          <Cards
            imagen='https://lh3.googleusercontent.com/proxy/bvLPyMrAMhaizcZkTcek0AxVfLne74uyocwbRMK_5BkGApGwbgGLPaDCHpjte90oOx4Bl8D72tofXAYU16M1ToIsuG_sVDZl'
            titulo='Titulo Card 2'
            texto='texto de la Card 2'
          />
        </div>
        <div className="col">
          <Cards
            imagen='https://lh3.googleusercontent.com/proxy/bvLPyMrAMhaizcZkTcek0AxVfLne74uyocwbRMK_5BkGApGwbgGLPaDCHpjte90oOx4Bl8D72tofXAYU16M1ToIsuG_sVDZl'
            titulo='Titulo Card 3'
            texto='texto de la Card 3'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
