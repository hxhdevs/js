// Las Classes en JavaScript llegaron hasta hace pocos años, muchas personas no consideraban a 
// javascript como un lenguaje serio ya que la programación orientada a objetos era el object 
// constructor y los métodos eran los prototypes...
// Así que en 2015 llegaron las classes a javascript, que solo es una mejora en la sintaxis,
// al final sigue siendo un object constructor con sus prototypes..
// En realidad sigue siendo lo mismo, pero la facilidad de crear objetos y añadirle métodos 
// si mejoro bastante gracias a las classes
// Las classes se crean con la palabra reservada class...

class Cliente { // El Nombre debe ser en mayusculas... Y esta forma se le conoce como CLASS DECLARATION
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostraInformacion(){
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenida al cajero`;
    }

}


//Si recuerdas previamente instanciabamos nuestro objecto para pasar esos valores las classes
//introducieron lo que se conoce como constructores...
//en algunos lenguajes el constructor es el mismo nombre de la clase pero en javascript es constructaor
const nombre = new Cliente('Elih', 400);
console.log(nombre.mostraInformacion());
console.log(Cliente.bienvenida());
console.log(nombre);


// Existe una segunda forma de crear classes, se le conoce como class Expression
const Cliente2 = class {
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostraInformacion(){
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo} berries`;
    }
}

const nombre2 = new Cliente2('Elih Freecs', 400);
console.log(nombre2.mostraInformacion());
console.log(nombre2);