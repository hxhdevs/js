// Veamos algunas operaciones útiles en los arreglos,


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses)
console.table(meses[0])
console.table(meses[1])
console.table(meses[2])

// Si quieres saber cuantos elementos hay un arreglo puedes utilizar la propiedad
console.log('Longitud del array con lenght '+meses.length);

// Si este arreglo tuviera 40 elementos sería muy complicado ir 1 por 1, si tienes un carrito de compras y agregas o quitas elementos del carrito, ese arreglo crece de forma dinamica
//entonces, como acceder a todos los elementos? con algo llamado un iterador, y en javascript hay varios, veamoslo con for
for (let i = 0; i < meses.length; i++) {
    //aqui optenemos el recorrido de los meses uno a uno sin el index solo valor del elemento a diferencia del siguiente
    console.log(meses[i]);
}

console.log(meses)