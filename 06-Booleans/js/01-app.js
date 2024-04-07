// El tipo de dato boolean solo puede tener 2 valores, true o false, veamos como crearlos

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";



console.log(boolean1);//imprimer true
console.log(boolean2);//imprime false


console.log(typeof boolean2);// imprime boolean

//También un Boolean se puede crear con la palabra new
console.log(boolean1 === boolean3);//imprime false
const boolean4 = new Boolean(true);//poco comun de ver
console.log(boolean4);
console.log(typeof boolean4);//imprime como onjeto
