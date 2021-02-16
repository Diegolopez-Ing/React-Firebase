const datos=[
    {nombre:'Maria',edad:37},
    {nombre:'Sergio',edad:22},
    {nombre:'Andrea',edad:52},
    {nombre:'Juan',edad:18}
]

// CON FOREACH
datos.forEach(x=>{
    console.log(x);
})
datos.forEach(x=>{
    console.log(x.nombre);
})

// CON MAP, es mejor recorrer una collection de objetos
datos.map(x=>{
    console.log(x);
})

datos.map(x=>{
    console.log(x.nombre);
})