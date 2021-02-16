//OBJETOS
const Persona={
    nombre:'Maria',
    edad:27,
    casada:false,
    // Un elemento puede ser otro objeto
    hijo:{
        nombre:'Diego',
    }
}
// Propieades de los objketos
console.log(Persona);
console.log(Persona.nombre);
console.log(Persona.casada);
console.log(Persona.hijo.nombre);

// Añadir elementos al obejtp
Persona.id=1
console.log(Persona);
