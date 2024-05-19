// Importar y exportar multiples valores
export const nombreCliente =  'Juan';
export const ahorro = 200

export function mostrarInformacion(nombbre, ahorro){//usamos export para modularizar la funcion
    return `Cliente: ${nombreCliente} -  ${ahorro}`
}

export function tieneSaldo(ahorro){
    if (ahorro > 0) {
        console.log('Si tiene saldo')
    } else{
        console.log('El cliente no tiene saldo')
    }
}