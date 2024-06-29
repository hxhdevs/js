// Class Pattern
// Este patron basicamente define como se crean los objetos y este puede ser usado o instanciado en algun punto
// y reutilizar sus metodos
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'correo@correo.com');

console.log(persona);