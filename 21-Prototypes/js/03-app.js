//constructor en espera de que su objeto sea instanciado 
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
// el proto obtiene la referencia hacia el objeto actual
// Obtener Tipo de Cliente
Cliente.prototype.tipoCliente = function()  { // Con prototypes tienes que utilizar function, function buscara en el mismo objeto mientras que un arrow function irá hacia la ventana global marcandote un undefined
    let tipo;
    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo  = 'Normal';
    }
    return tipo;
}

// Otro Prototipo para el nombre y saldo completo
Cliente.prototype.nombreClienteSaldo = function()  {
    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente:  ${this.tipoCliente()} `;
    //un prototype puede llamar a otro prototype siempre y cuando compartan el objeto
}

Cliente.prototype.retiraSaldo = function(retiro)  {
    this.saldo -= retiro;
}

// Instanciarlo
const pedro = new Cliente('Pedro', 6000);
// Acceder a los prototypes
console.log ( pedro.tipoCliente() );
// Un prototype que accede a otros prototypes
console.log ( pedro.nombreClienteSaldo() );
// reescribir un valor
pedro.retiraSaldo(2000);
// comprobar saldo
console.log ( pedro.nombreClienteSaldo());
//un prototype puede usar parametros 