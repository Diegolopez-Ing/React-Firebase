// Funcion para trabajar atraves de pormesa y callback API
// Se le pueden realizar peticiones a API's atravers de promesasS
fetch('https://jsonplaceholder.typicode.com/todos/1')
    // Con .then capturamos la promesa, para este caso la solicitud a la API
    .then(respuesta=>respuesta.json())
    .then(json=> console.log(json))
    // .then(json=> console.log(json.userId))
    // Los errores de la respuesta se capuran con .catch
    .catch(e=>console.log(e))
