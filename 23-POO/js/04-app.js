// De la misma forma que puedes heredar un constructor con Prototoypes y sus métodos, también puedes heredar una clase, es una de las caracteristica que hhay en POO

class Cliente { 
    #nombre; //privado y solo se puede acceder o modificar desde la propia clase por lo tanto no se hereda
    constructor( nombre, saldo ) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Hola ${this.#nombre}, tu saldo es: ${this.saldo}`;//tambien se le pasa el atributo privado si se pasa sin # marcara undefined 
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}



const newCliente = new Cliente('Elih', 3000);
console.log(newCliente.mostrarInformacion() );
// console.log(name.#nombre);//no se puede acceder al atributo solo desde la propia clase
