// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:
const producto = {
        nombre: "Monitor 20 ",
        precio:300,
        disponible: true
    
}
//otra forma de acceder a elementos mediante array destructuring
const {disponible}=producto;
console.log(producto);


// Si quieres saltarte un valor, pon una coma....

// ahora, como extraes todos los otros valores, digamos que solo quieres crear la primer variable, mantener el arreglo original..




const numeros = [10,20,30,40,50];

//const [primero, , segundo, tercero ] = numeros;
//con rest operator copiamos la segunda pocision acia delante
//const [ primero, ...segundo ] = numeros;
//si se deja un espacio en blanco tambien se toma en cuenta y considera aunque no se ponga directamente el valor
//rest operator copia de la pocision en la que se encuentra sobre el arreglo hacia delante
const [ primero, , ...tercero ] = numeros;


// console.log(numeros);
console.log(primero);
//console.log(segundo);
console.log(tercero);