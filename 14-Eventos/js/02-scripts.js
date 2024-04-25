// En este video estaremos viendo eventos que ocurren con el mouse

const nav = document.querySelector('.navegacion');

nav.addEventListener('click', ()=>{//solo aplica si damos click en el elemento nav
    console.log('click en nav');
})

// vamos a registrar el eventListener para el nav..
nav.addEventListener('mouseenter', () => {
    console.log('entrando a navegacion')
    nav.style.backgroundColor = 'green';//cambia de color al entrar al elemento
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseup', () => {//solo aplica cuando clickamos y soltamos el mouse
    console.log('saliendo del mouseup');
    nav.style.backgroundColor = 'cyan';
})

nav.addEventListener('dblclick', () => {//solo funciona si damos doble click
    console.log('double click it works');
    nav.style.backgroundColor = 'orange';
})

// otros eventos abarcan...
// mousedown - // cuando presionamos
// click - similar, de hecho es probablemente el más utilizado..
// dbclick - doble click como cuando quieres abrir un archivo
// mouseup - al soltar
// 