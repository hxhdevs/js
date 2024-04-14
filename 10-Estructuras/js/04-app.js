// operador mayor y menor que y uso de else if
const dinero = 100,
      totalAPagar= 500, 
      tarjeta=false,  
      cheque = false; 
      
if( dinero == totalAPagar){
    console.log('Si podemos pagar');
}else if(cheque){
    console.log('Cuento con cheque con fondos')
}else if(tarjeta){
    console.log('Tarjeta con fondos insuficientes')
}else{
    console.log('Fondos insuficientes')
}

// El problema del else if es que si agregas múltiples llegan a ser complejos de leer...

let rol = 'ADMIN';

if(rol === 'ADMIN') {
    console.log('El Usuario puede editar, eliminar y ver toda la información');
} else if(rol === 'EDITOR' ) {
    console.log('El usuario puede editar todos los registros');
} else if(rol === 'AUTOR') { 
    console.log('El usuario solo puede registrar usuarios');
} else {
    console.log('El Usuario es visitante, solo puede ver la información');
}