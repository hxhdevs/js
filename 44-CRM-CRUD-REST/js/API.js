const url = "http://127.0.0.1:5500/44-CRM-CRUD-REST/db.json";

export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(cliente), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const respuesta = await resultado.json();
        
        // Verificar si la respuesta contiene la propiedad "clientes"
        if (!respuesta.clientes || !Array.isArray(respuesta.clientes)) {
            throw new Error('La respuesta no contiene una lista de clientes válida.');
        }

        const clientesArray = respuesta.clientes;

        console.log("Clientes obtenidos:", clientesArray);
        return clientesArray;
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener los clientes.');
    }
}


export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}


export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT', 
            body: JSON.stringify(cliente), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}