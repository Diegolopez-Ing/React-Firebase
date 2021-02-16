const Persona={
    nombre:'Maria',
    edad:27,
    casada:false,
    // Un elemento puede ser otro objeto
    hijo:{
        nombreHijo:'Diego',
    }
}


// DESTRUCTURING
const{nombre,edad}=Persona
console.log(nombre);
console.log(edad);

const{nombreHijo}=Persona.hijo
console.log(nombreHijo);

