// Al Igual que los objetos un arreglo se puede modificar a pesar ade utilizar la palabra const

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];


//Se puede decir que se esta reescribiendo el mes en la pocision 0
meses[0] = 'Nuevo Mes'
// También se puede añadir al final
meses[6] = 'Ultimo Mes'
//si definimos un mes que no existe y nos saltamos n pocisiones se crea el elemento con el valor de esa pocision
meses[11] = 'Mes X'

console.log(meses);