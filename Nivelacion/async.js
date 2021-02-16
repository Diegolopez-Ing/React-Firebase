/*
// Funcion para trabajar atraves de PROMESAS y callback API
// Se le pueden realizar peticiones a API's atravers de promesasS
fetch('https://jsonplaceholder.typicode.com/todos/1')
    // Con .then capturamos la promesa, para este caso la solicitud a la API
    .then(respuesta=>respuesta.json())
    .then(json=> console.log(json))
    // .then(json=> console.log(json.userId))
    // Los errores de la respuesta se capuran con .catch
    .catch(e=>console.log(e))*/



    // Mediante esta fuyncion assincrona le assignamos seguridad a nuestra promesa
    // Async y Await funcionan juntos

const obtenerUsuario= async()=>{
    try {
        const respuesta=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const datos = await respuesta.json()
        console.log(datos);
    } catch (error) {
        console.log(error);        
    }
}
obtenerUsuario()