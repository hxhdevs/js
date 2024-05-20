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

export class Cliente{//agregamos export para poder exportar la clase
    constructor(nombre,ahorro){
        this.nombre = nombre
        this.ahorro = ahorro
    }

    mostrarInformacion(){
        return `Cliente ${this.nombre} - Ahorro ${this.ahorro}`;
    }
}

export default function nuevaFuncion(){
// export default function (){
    console.log('Soy el xport default, puede irme con o sin nombre dela funcion')
}