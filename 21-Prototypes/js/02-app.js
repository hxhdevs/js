// El problema que solucionan los prototypes...
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const nombreuser = new Cliente('Elih', 400);
console.log(nombreuser);

// Supongamos que queremos una función que muestre el nombre y saldo...
function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}//template strings

console.log( formatearCliente(nombreuser));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const hxh = new Empresa('HXH devs ', 400,'Specialized');
console.log(hxh);
// Debido a que tengo una propiedad nueva, es dificil reutilizar esa función, lo cual nos llevaria digamos a muchas funciones que no sabriamos cuales utilizar para los diferentes objetos
// esa es una ventaja que nos dan los prototypes ya que podemos crear funciones que se podrían atar o utilizar unicamente con determinados objetos...
// mayormente se recomienda usarlo en proyectos grandes