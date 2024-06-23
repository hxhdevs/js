// Pure Functions...
// Son funciones que retornan un dato pero no modifican los valores de las variables...
// otra caracteristica es que con una entrada de datos deben retornar la misma cantidad de entradas
// Usualmente el resultado deberá ser una nueva variable, ya modificada.

//UNA FUNCION PURA NO DEBE MODIFICAR EL VALOR ORIGINAL mas bien se debe generar un nuevo valor
//tambien debe retornar un solo valor

const numero1=20;
const duplicar = numero => numero*2;

const resultado = duplicar(numero1);

console.log(resultado)
console.log(numero1)