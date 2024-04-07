// Si recuerdas una variable con const una vez que es definida no puede reasginarse su valor.


// const producto = "Monitor";
// producto = 'Tablet';
// console.log(producto);


// En el caso de los objetos veremos que tienen un comportamiento diferente, ya que sus propiedades si se pueden reescribir.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion:{
        medidas:{
            peso:'1kg',
            medida:'1m'
    },
    fabricacion: {
        pais: 'China'
    }
  }
}
// Aplicar destructuring tiene ventajas como extraer informacion y crear la variable en un solo paso
// const {nombre,informacion, informacion:{fabricacion:{pais}}} = producto;
const { nombre, informacion, informacion: { fabricacion, fabricacion:{ pais } } } = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);