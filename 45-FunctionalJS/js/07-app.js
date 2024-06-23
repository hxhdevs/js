// Funciones que retornan una función
//Doble arrow function es basicamente una funcion con otra funcion
//Es poco comun 

// Es una funcion que devuelve una funcion
          const obtenerCliente = () => () => console.log('HxH');
//|esto es el bloque de obtenerCliente|//fn es de aca en delante
const fn = obtenerCliente();
fn()//imprimimos