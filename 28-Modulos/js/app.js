// 1) El Problema
// console.log(nombreCliente);
// 1) Esto nos puede llevar a variables que se mezclen con otras en especial si el código es mantenido por múltiples personas o también si decidimos implementar librerías...
// La solución es agrupar cada archivo en lo que se conoce como un IIFE (irse al otro archivo...)
// console.log(window.nombreCliente);
import { nombreCliente, ahorro }  from './cliente.js';//de este modo nos traemos los valores de cliente.js simepre y cuando esten como export
console.log(nombreCliente); // También nos va a marcar un error por lo tanto agregamos type="module"
console.log(ahorro);

