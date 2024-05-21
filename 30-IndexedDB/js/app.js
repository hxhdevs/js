

document.addEventListener('DOMContentLoaded', () => {
    crmDB();
});


function crmDB() {
    // crear base de datos con la versión 1
    let crmDB = window.indexedDB.open('crm', 1.1);

    // si hay un error, lanzarlo
    crmDB.onerror = function() {
        console.log('Hubo un error al crear BD');
    }
    // si todo esta bien, asignar a database el resultado
    crmDB.onsuccess = function() {
        console.log('Base de datos creada!');
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
        objectStore.createIndex('email','email',{unique: false});
        objectStore.createIndex('telefono','telefono',{unique: false});


        console.log('Columnas creadas');
    }
}
