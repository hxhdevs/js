
let automovil = {
    modelo: 'Camaro',
    motor: '6.0',
    anio: '1969',
    marca: 'Chevrolet'
}
// el for in va a iterar sobretodas las propiedades de un objeto
for(let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);//itera sobre todo el objeto
    
    //console.log(auto);//solo intera sobra las keys
}

const carrito = [
    {id: 1, producto: 'Libro' },
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'}
];

// a diferencia del for of que itera sobre un arreglo
for (let producto of carrito) {
    console.log(producto.producto);
}