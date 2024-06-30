// Mixins, es una forma de agregar funciones a una clase una vez que ha sido creada...

class Persona {
    constructor(nombre, email, tipohxh) {
        this.nombre = nombre;
        this.email = email;
        this.tipohxh = tipohxh;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre}, Email: ${this.email}`);
    }
}
const funcionLicencia = {
    mostrarLicencia() {
        console.log(`El cazador ${this.nombre} con Licencia de : ${this.email} actualmente se encuentra desarrollando habilidades Nen en ${this.tipohxh}`);
    }
}
// Añadir funcionesPersona a la clase...
Object.assign(Persona.prototype, funcionesPersona,funcionLicencia);//asi le pasamos la funcion a la clase
// Object.assign(Persona.prototype, funcionLicencia);
const cliente = new Persona('Elih', 'correo@correo.com');
const hunter = new Persona('Elih','Cazador Profesional de software','El torneo del cielo');

console.log(cliente);
cliente.mostrarInformacion();
console.log(hunter);
hunter.mostrarLicencia();