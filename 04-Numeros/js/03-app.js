// Math es parte de la ventana global de JavaScript, tiene una serie de operaciones que pueden ser muy útiles y algunas actuan de forma algo extraña, asi que vamos a verlas.

let resultado; 

// Pi
resultado = Math.PI;
// redondeo
resultado = Math.round(2.5);
// redondeo abajo o arriba (ceil o floor )
resultado = Math.ceil(2.2);
// Raiz cuadrada
resultado = Math.sqrt(144);
// Abssoluto
resultado = Math.abs(-300);
// Potencia - valor y potencia a la que sera elevada
resultado = Math.pow(8, 3);
// Minimo  - devuelve el valor minimo de una cadena
resultado = Math.min(3,5,1,2,9,4,2, -3);
// Max - devuelve el valor maximo de una cadena
resultado = Math.max(4,1,21,4,15,5,11,5);
// Aleatorio - genera un valor aleatorio
resultado = Math.random();
// Aleatorio dentro de un rango:
resultado =  Math.floor( Math.random() * 30 );


console.log(resultado);