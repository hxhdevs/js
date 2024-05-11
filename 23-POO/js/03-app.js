// De la misma forma que puedes heredar un constructor con Prototoypes y sus métodos, también puedes heredar una clase, es una de las caracteristica que hhay en POO
class Cliente { 
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    
    mostrarInformacion() {
        return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

// NUEVO :
class Empresa extends Cliente {//heredando cliente
    constructor(nombre, saldo, telefono, giro) {
        super(nombre, saldo);//con super accedemos a las propiedades de la calse padre
        this.telefono = telefono;// los atributos propios de la clase de declaran con .this
        this.giro = giro;
    }

    static bienvenida(mensaje){ // para reescribir un método basta con llamarlo igual que el que se esta heredando y cambiar sus propiedades
        return `Bienvenido al cajero para empresas`;
    }
}



const nombre = new Cliente('Elih', 3000);
const empresa = new Empresa('Empresa1', 10000, 10290193, 'Construccion');// Heredando y creando una instancia de empresa
console.log(empresa);
console.log(empresa.mostrarInformacion());// Debido a que heredamos podemos acceder a mostrarInformacion
// Acceder al statico sin instanciar de ambos
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());