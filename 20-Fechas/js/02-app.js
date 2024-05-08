//Haciendo uso de la lib MomentJS
//cualquier cosa que ocupes ve a la url del CDN para consultar metodos y funciones de esta
const diaHoy = new Date();
moment.locale('es');  //devuelve la fecha en español
console.log(  moment().format('MMMM Do YYYY, h:mm:ss a', diaHoy) );
console.log ( moment().add(3, 'days').calendar() );//fecha actual mas 3 dias
console.log( moment().format('LLLL', diaHoy) )//