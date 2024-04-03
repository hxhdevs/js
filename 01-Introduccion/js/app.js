
// 08 - Obteniendo ayuda con ESLint para revisar errores de código.
// instalalo con npm la siguiente linea funciona para windows debes tener npm
//npm i -g eslint
// crear el archivo .eslintrc.json e descomenta el siguiente bloque e incluyelo


// {
//     "parserOptions" : {
//         "ecmaVersion": 6
//     },
//     "rules" : {
//         "semi": ["error", "always"] // Muestra errores de código o también errores de código
//     }
// }

console.log('Hola');
console.log('Mundo');

function hola(){
    console.log('Hola');
    console.log('Mundo');
    
}

//escribe en consola eslint js/app.js y te devolvera un alert de los problemas que podrias tener
//escribe en consola eslint js/app.js --fix de este modo se reescribira con las sugerencias para aplicar cambios