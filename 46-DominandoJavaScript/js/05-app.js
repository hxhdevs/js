// Explicit binding
// Existe otra forma de hacer binding y es con EXPLICITI BINDING...

function persona(el1, el2) {
    console.log(`Mi Nombre es: ${this.name} & I  listen: ${el1} & ${el2} `);
}
const informacion = {
    name: 'Elih',
    job: 'Pro Hunter'
}
const musicaFavorita = ['Technical Death Metal', 'Technical Progressive Metal'];

// .call existe en todas las funciones de Javascript, y puedes pasarle digamos un objeto o arreglo dentro de la función... 
//IMPORTANTE:n ota como el segundo argumento es un array, en .call tienes que pasar cada elemento del array de forma individial, con su posición...
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);//call tiene que recibir explicitamente que pocision del array debe recibir

// explicit binding with .apply, este es casi igual a .call, pero toma un array completo...
persona.apply(informacion, musicaFavorita);

// finalmente .bind va a ser como .call en que le pasas cada argumento de forma individual, pero te crea una nueva función..
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();

// Estos 3, .call, .apply y .bind ya son temas más avanzados, pero los he visto en entrevistas de Desarrolladores JavaScript así que es importante que conozcas las diferencias.