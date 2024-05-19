// Veamos unas erie de iteradores que se pueden considerar nuevos en JavaScript
// ya vimos algunos en videos anteriores y usualmente con un for un map estarás bien,
// pero hay otros que pueden facilitarte tu código.
// Entries Iterador
const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador Web');
// entries a las ciudades devuelve key y valor
for( let entry of ciudades.entries() ){
    console.log(entry);
}
for( let entry of ordenes.entries() ){
    console.log(entry);
}
for( let entry of datos.entries() ){
    console.log(entry);
}

// Values iterator devuelve los values de ciudades
for(let value of ciudades.values()) {
    console.log(value);
}
for( let value of ordenes.values() ){
    console.log(value);
}
for( let value of datos.values() ){
    console.log(value);
}


// Keys iterator devuelve keys de las ciudades
for(let keys of ciudades.keys() ) {
    console.log(keys);
}
for( let keys of ordenes.keys()  ){
    console.log(keys);
}
for( let keys of datos.keys()  ){
    console.log(keys);
}

// Default
for(let ciudad of ciudades) {
    console.log(ciudad);
}
for( let orden of ordenes){
    console.log(orden);
}
for( let dato of datos){
    console.log(dato);
}

// Iterar en un string
const mensaje = 'Aprendiendo JavaScript';
// Forma vieja
for( let i = 0; i < mensaje.length; i++ ) {
    console.log(mensaje[i]);
}
// forma nueva
for( let letra of mensaje) {
    console.log(letra);
}
// Iterar en un NODE LIST
const enlaces = document.getElementsByTagName('a');
for (let enlace of enlaces) {
    console.log(enlace.href);
}
   