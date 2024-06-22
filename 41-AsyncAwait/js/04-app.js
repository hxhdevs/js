// 2 O mas Async await...
//Es muy común tener 2 Async Await,  es probable que quieras en una misma función descargar los últimos 100 clientes y también los últimos 50 pedidos..

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando Clientes....');
        setTimeout( () => {
            resolve('Los clientes fueron descargados');           
        }, 2000);

    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando Pedidos....');
        setTimeout( () => {
            resolve('Los pedidos fueron descargados');           
        }, 2000);
    });
}

// Async await forma INCORRECTA de ejecutar
// Aqui se aplica asyn await PEEEERO se ejecuta una despues de otra y no al mismo tiempo ya que no tiene nada que ver una con la otra son funciones independientes
//Esto afecta el performance de carga de contenido o resultados
// const app = async () => {
//     try {
//         const clientes = await descargarNuevosClientes();
//         console.log(clientes);

//         const pedidos = await descargarUltimosPedidos();
//         console.log(pedidos);
//     } catch (error) {
//         console.log(error)
//     }
// }

// La solución, Promise.all();
// FORMA CORRECTA esta forma se puede llamar ejecucion en paralelo es decir se ejecutan al mismo tiempo
const app = async () => {
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos() ])
        console.log(respuesta);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error)
    }
}
//ASKIN porque se ejecuta lento? no estan aplicando correctamente el async await ver forma correcta e incorrecta
app();