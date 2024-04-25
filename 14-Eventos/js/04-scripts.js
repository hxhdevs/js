// Veamos los eventos para un formulario, básicamente es uno pero es muy importante
// Cuando envias un formulario usualmente lo que este en el action, es la página que se abre...
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', e => {

    e.preventDefault(); // PreventDefault es evitar que el navegador realice la acción por default, en este caso ir al action...
    // Usualmente utilizaras preventDefault para validar el formulario antes de enviarlo a un servidor
    // Crear consultas Ajax entre otras cosas
    console.log('enviando...');
    // Mucha información valiosa en este e...
    console.log(e);
    console.log(e.target.method)//devuelve el metodo del elemento es decir POST o GET
    console.log(e.target.action)//devuelve el action del form es decir a donde va o que hace
})

function validarFormulario(e){//probar esto con y sin e
    e.preventDefault()
    console.log('Buscando')
    console.log(e.target.action)
}