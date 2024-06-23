import { mostrarAlerta } from './funciones.js';//importamos la funcion desde el archivo llamado recuerda que tiene que agregarse import

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    async function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre, 
            email, 
            telefono,
            empresa
        }

        if( validar(cliente) ) {
            mostrarAlerta('Todos los campos son obligatorios')
            return;
        }
        
        console.log('Si se paso la validacion')
    }


   

    function validar(obj) {//Forma refactorizada que valida los campos
        return !Object.values(obj).every(element => element !== '');
    }

   
})();