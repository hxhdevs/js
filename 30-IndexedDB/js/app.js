let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    },5000);
});


function crmDB() {
    // crear base de datos con la versión 1
    let crmDB = window.indexedDB.open('crm', 1);

    // si hay un error, lanzarlo
    crmDB.onerror = function() {
        console.log('Hubo un error al crear BD');
    }
    // si todo esta bien, asignar a database el resultado
    crmDB.onsuccess = function() {
        console.log('Base de datos creada!');
        DB = crmDB.result;
    }

    // este método solo corre una vez
    crmDB.onupgradeneeded = function(e) {
        // console.log(e.target.result);
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm',{
            keyPath:'crm',
            autoIncrement: true
        });

        //Definir las columnas
        objectStore.createIndex('nombre','nombre',{unique: false});
        objectStore.createIndex('email','email',{unique: true});
        objectStore.createIndex('telefono','telefono',{unique: false});


        console.log('Columnas creadas');
    }
}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(){
        console.log('Transaccion completada');
    }

    transaction.onerror = function(){
        console.log('Hubo un error de la transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 9531226488,
        nombre: 'Elih',
        email: 'Jordisonnicolas@gmail.com'
    }

    const peticion =  objectStore.add(nuevoCliente);
    // const peticion =  objectStore.put(nuevoCliente);//para actualizar
    // const peticion =  objectStore.delete(nuevoCliente);//para eliminar
    //SOPORTA CRUD
}