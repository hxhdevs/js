// En la programación funcional las funciones son valores.
// Javascript es un buen candidato a ser un lenguaje funcional porque podemos tener algo asi:


const suma = function(a, b) {//asignamos como variable a una funcion
    return a + b;
}

// Es por eso que un lenguaje se le conoce como first-class functions, ya que pueden ser creadas como si fueran variables, de enteros, numeros o booleans

const resultado = suma; // Aquí la función es valor como si fuera un string..
console.log (resultado(20,30));//al asignar el valor de suma a resultado entonces es lo mismo que tener la funcion y solo se le pasan los parametros

