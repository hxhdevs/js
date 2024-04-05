// Repeat Te va a permitir repetir una cadena de texto:

const producto = 'Monitor 24 pulgadas ';
const texto = 'en Promoción '.repeat(3)
console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // va a redondear a entero
console.log(`${producto} ${texto} !!!`);
 


// Split
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));


// Pregunta tecnica: Que pasa si ponemos con .decimal en repeat?
// JS lo redondea a entero 
//Pregunta:Que hace split?
//Separa, es decir crea un nuevo renglon segun sea el caracter que le pasemos, en el ejemplo debe dar como resultado
// 0 Leer
// 1 caminar
// 2 escuchar musica
// 3 escribir
// 4 aprender a programar