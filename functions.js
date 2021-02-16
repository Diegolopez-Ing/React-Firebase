function saludar() {
    console.log('Hola Diego!');
}
saludar()


//ARROW FUNCTIONS 1
const saludo=()=>{
    console.log('Hola soy Digo Arrow functions')
}
saludo()

//ARROW FUNCTIONS 2
const saludos=()=>console.log('Hola soy Digo Arrow functions')
saludos()

//Arrow function con parametros 1
const saludes=(a,b,c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
}
saludes('Diego',3,true)

//Arrow function con parametros 2
const saludis=(a,b,c)=>{
    return a+b+c
}
console.log(saludis('Diego',3,true));

//Arrow function con parametros 2
const saludas=(a,b,c)=>a+b+c
console.log(saludas('Diego',3,true));


//FUNCIONNES Dentro de Funciones 1-----CALLBACK

const func1=(dato)=>{
    return dato
}
const func2=(d)=>{
    console.log(d);
}
func2(func1('Diego desde func1'))


const func3=(dato)=>dato
const func4=(d)=>console.log(d);
func4(func3('Diego desde func3'))
