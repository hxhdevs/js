// Funciones que toman parametros y argumentos...

// Nuestra primera función no tiene nada de emocionante, es demasiado simple, para que tus funciones puedan ser más versatiles e inteligentes deberán utilizar parametros y argumentos
function sumar(a, b){
    console.log(a+b)
}
sumar(2,3)
sumar(122,33)
sumar(22+332)


function saludar(nombre, apellido) { // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
    console.log( `Hola ${nombre}  ${apellido} ` );
}
saludar('Elih', 'Freecs'); // eLIH y Freecs son argumentos, son los valores reales...
saludar('Elih', '');
saludar();
