// Coercion
// La Coercion es un tema interesante en JavaScript, es la conversión automática o implicita de valores de un tipo de dato a otro
// Si tienes un String y un número y quieres sumarlos:

const numero1 = 20;
const numero2 = "40";

console.log(numero1 + numero2); // String... (  este tipo de coercion se conoce como IMPLICITA)

// También puedes convertir un string a número de manera explicita usando Number
console.log(Number(numero2)); // Aquí como utilizamos una función se le conoce como explicita y se le esta diciendo detalladamente que esto sera un numero


// O un número a string...

const numero4 = 20;
console.log(numero4.toString() );

// Un arreglo o un objeto se puede modificar a String...

const pedido = [1,2,3,4];
console.log(pedido.toString());//convertimos explicitamente a string
console.log(JSON.stringify(pedido));//aqui convertimos ese arreglo a string y sigue siendo array de json


