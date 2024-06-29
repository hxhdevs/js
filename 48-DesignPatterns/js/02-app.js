// Constructor Pattern es cuando utilizamos una clase base 
// esta puede ser instanciada con clases abstractas en otros lenguajes pero al ser nuevo en JS solo se puede hacer uso de esta heredando con extendes y super
// si notas no se puede instanciar directamente solo con extends para hacer uso de sus propiedades con super


class Persona {
    constructor(nombre, email, empresa) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Elih', 'correo@correo.com');
console.log(persona);

const cliente = new Cliente('Elih', 'cliente@cliente.com', 'HxH');
console.log(cliente);