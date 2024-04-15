// Los operadores ternarios, llegan a ser muy útiles ya que te dan un código más simplificado

const autenticado = false;
const puedePagar = false

console.log( autenticado  ? 'Si esta autenticado' : 'No esta autenticado');
console.log( puedePagar ? 'Si puede pagar' : 'No dispone de pago');

// El OR y el && también se pueden utilizar en el ternario
console.log( autenticado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado');
// Ternario anidado...
console.log( autenticado  ?  puedePagar ? 'Si puede pagar' : 'esta autenticado pero no puede pgar' : 'No esta autenticado');


// Jugar con los valores...