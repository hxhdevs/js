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
            console.log('Todos los campos son obligatorios')
            return;
        }
        
        console.log('Si se paso la validacion')
    }


   

    function validar(obj) {//Forma refactorizada que valida los campos
        return !Object.values(obj).every(element => element !== '');
    }

   
})();