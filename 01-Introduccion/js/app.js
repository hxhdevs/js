// 06 - Todos los navegadores tienen una consola de Javascript, las mejores sin duda son firefox y Chrome
// La consola es muy útil ya que podrás observar tu código JS, resultados y seleccionar elementos

// Se pueden crear variables e imprimirlas
//solo escribe hola en la consola y mostrara el valor de la variable
const hola = "Hola desde la consola";
console.log(hola);

// También se pueden crear arreglos
console.log([1, 2, 3, 4]);

// De la misma forma se pueden crear objetos
let obj = { nombre: "Hector", profesion: "Desarrollador Web" }
console.log( obj );

// También se pueden imprimir resultados como tabla
console.table([1, 2, 3, 4]);

// o mostrar algún error
console.error("Algo salió mal");

// Limpiar la consola
console.clear();

// O enviar advertencias
console.warn("Eso no esta permitido");

// También monitorear el tiempo que tarda algo en ejecutarse
console.time('Hola'); console.warn("Eso no esta permitido"); console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");
console.timeEnd('Hola');


// Puedes probar individualemnte cada una de las lineas directamente en consola o mandando llamar una a una haciendo refresh en la pagina principal
// al estar siendo llamado por ruta relativa debe cargarlo sin problema aseguratre de checar en el apartado izquierdo de la consola en las secciones de
// >messages
// >No errors
// >Warnings
// >Info
