
// MAPS
// Listas ordenadas en llave - valor, donde el tipo y el valor pueden ser cualquier tipo,
// a diferencia de un objeto puede tener la llave de cualquier tipo de dato y en cuanto a performance
// los maps tienen mejor performance que los objetos, son especialmente diseñados para agregar o quitar
// elementos así como recorrer, también cuando son muy grandes tienen mejor performance que un objeto

let cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
// con set agregamos llave y valor al Map
console.log(cliente);

// acceder a los valores con get
console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));


// Métodos de MAP
// Tamaño del MAP
console.log(cliente.size);
// Contiene un valor
console.log(cliente.has('tipo'));
console.log(cliente.get('tipo'));
// Borrar
cliente.delete('nombre');//con esto borramos la llave del objeto
console.log(cliente.has('nombre'));//devuelve false
console.log(cliente.has('nombre2'));//devuelve false
console.log(cliente.get('nombre'));//devuelve el valor del key si existe si no sera undefined
console.log(cliente.size);
cliente.clear();// Borrar el map
console.log(cliente);//devuelve empty



const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);// También se puede inicializar un map con diferentes valores...
paciente.set('Dr JS', 'Sr profesor Dr JS');// tambien podemos agregarle otro mas con .set
paciente.set('nombre', 'Dr JS');// podemos sobreescribir un elemento
// paciente.set('cuarto', 400);
console.log(paciente);
// Foreach a un map
paciente.forEach((datos, index) => {// los maps son iterables
    // console.log(datos);
    console.log(`${index}: ${datos}`);//index devuelve el key y datos los datos 
});

