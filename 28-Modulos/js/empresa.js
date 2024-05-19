//Como heredar una clase exportada...
import { Cliente }  from './cliente.js';

export class Empresa extends Cliente{// aplicamos export apra poder exportarla
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);//Con super heredamos el constructor  de la clase padre
        this.categoria = categoria;//this es para un atributoi propio de la clase
    }

    mostrarInformacion() {//sobreescribimos el metodo heredado 
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria ${this.categoria}`;
    }

}
