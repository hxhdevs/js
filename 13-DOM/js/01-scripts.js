// 01- Vamos a abrir el capitulo 13-DOM y abrirlo en Live server

// Lo primero que haremos sera crear una carpeta llamada js / y en ella colocar el archivo scripts.js

let elemento;

elemento = document;
elemento = document.all;
elemento = document.all[0];
elemento = document.head;
elemento = document.body;
elemento = document.domain;//devuelve el dominio
elemento = document.forms[0];//
elemento = document.forms[0].id;//
elemento = document.forms[0].method;//deveulve el motodo x ejemplo POST del formulario
elemento = document.forms[0].classList;//devuelve la lista de clases
elemento = document.forms[0].action;//devuelve enlaces reemplazar 0 por el elemento

elemento = document.URL;//
elemento = document.characterSet;//
elemento = document.contentType;//
elemento = document.forms;//
elemento = document.forms[0];//
elemento = document.forms[0].id;//
elemento = document.forms[0].method;//
elemento = document.forms[0].action;//

elemento = document.links;//
elemento = document.links[4].id;//
elemento = document.links[4].className;//
elemento = document.forms[0].classList;//
elemento = document.forms[0].classList[0];//

elemento = document.images;

elemento = document.scripts;
elemento = document.scripts[0].getAttribute('src');

console.log(elemento);



