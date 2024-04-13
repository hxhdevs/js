// Veamos la diferencia entre un método y una función...
const numero1 = 20; //numero
const numero2 = "20"; //string


// Aunque en realidad terminan siendo practicamente lo mismo, la forma en que se utilizan tiene que ver más que nada en el contexto que son utilizadas..

console.log( parseInt(numero2) ); // Esto es una función

console.log( numero1.toString()); // Esto es un método

// Puedes ver que mientras la función toma el valor en el parentesis, el método añade un punto seguido del nombre, esa seria la diferencia
// ahora ese valor que se pasa en el parentesis, se llaman argumentos de la función
//mientras que el metodo recibe un parametro 
