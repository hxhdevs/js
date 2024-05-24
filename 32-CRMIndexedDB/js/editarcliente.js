(function() {
    let DB;
    
    const nombreInput = document.querySelector('#nombre');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        // Verificar si el cliente existe
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id');
        if(idCliente) {
   
            setTimeout( () => {
                obtenerCliente(idCliente);
            }, 100);
        }

    });

    function obtenerCliente(id) {
  
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e) {
            const cursor = e.target.result;
            if (cursor) {
                if(cursor.value.id  == Number(id)) {
                    // pasar el que estamos editando...
                    llenarFormulario(cursor.value);
                }
                cursor.continue();          
            }
        };

    }

    function llenarFormulario(datosCliente) {
        const { nombre } = datosCliente;
         
        nombreInput.value = nombre;
    }

    function conectarDB() {
        // ABRIR CONEXIÓN EN LA BD:

        const abrirConexion = window.indexedDB.open('crm', 1);

        // si hay un error, lanzarlo
        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        };
     
        // si todo esta bien, asignar a database el resultado
        abrirConexion.onsuccess = function() {
            // guardamos el resultado
            DB = abrirConexion.result;
        };
    }
})();