// Veamos como unir 2 objetos, esto llega a ser muy común ya que algunas veces en una base de datos obtienes el ID del cliente y también tienes los clientes que pertenecen a ese ID y te gustaría unirlos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}


const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}

// Una forma de hacerlo es con el object method llamado assign y se pasan como parametros los objetos a unir
const resultado = Object.assign(producto, medidas);

// Otra forma de hacerlo que se considera más moderna es con El Spread Operator o Rest Operator
// los tres puntos ... implicitamente quiere decir que esta copiando el objeto
const resultado2 = {...producto,...medidas};
console.log(resultado);
console.log(resultado2);
