// Composition basicamemnte son funciones que se pueden compartir entre objetos

const obtenerNombre = (info) => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});
const guardarEmail = (info) => ({
    agregarEmail(email) {
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = (info) => ({
    mostrarEmail() {
        console.log(`Correo: ${info.email}`);
    }
});
const obtenerEmpresa = (info) => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
});
const obtenerPuesto = (info) => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
});

const obtenerDomicilio = (info) => ({
    mostrarDomicilio() {
        console.log(`Domicilio: ${info.domicilio}`);
    }
});

function Cliente(nombre, email, empresa) {
    let info = {
        nombre, 
        email, 
        empresa
    }
    return Object.assign(
        info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info), 
        obtenerEmpresa(info)
    )
}
function Empleado(nombre, email, puesto) {
    let info = {
        nombre, 
        email, 
        puesto
    }
    return Object.assign(
        info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}
function Civil(nombre, email, domicilio) {
    let info = {
        nombre, 
        email, 
        domicilio
    }
    return Object.assign(
        info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerDomicilio(info)
    )
}
const cliente = Cliente('Elih', null, 'HxH');
cliente.mostrarNombre();
cliente.agregarEmail('cliente@cliente.com');
cliente.mostrarEmail()
cliente.mostrarEmpresa()
console.log('------------------------------------------------------------------')
const empleado = Empleado('Employ', null, 'Developer');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail()
empleado.mostrarPuesto()
console.log('------------------------------------------------------------------')
const civil = Civil('John Doe', null, 'Domicilio conocido');
civil.mostrarNombre();
civil.agregarEmail('civil@civil.com');
civil.mostrarEmail()
civil.mostrarDomicilio()