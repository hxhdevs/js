// Declarando variables
const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda ={
    moneda : '',
    criptomoneda : ''
}

//Creando un Promise
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
});


document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit',submitFormulario);

    criptomonedasSelect.addEventListener('change',leerValor);
    monedaSelect.addEventListener('change',leerValor);
});

function consultarCriptomonedas() {// Consulta la API par aobtener un listado de Criptomonedas
    // Ir  AtoPLISTS Y Despues market capp 
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then( respuesta => respuesta.json()) // Consulta exitosa...
        .then( resultado => obtenerCriptomonedas(resultado.Data)) // 
        .then( criptomonedas  =>  selectCriptomonedas(criptomonedas) )
        .catch( error => console.log(error));
}

function selectCriptomonedas(criptomonedas) {// llena el select 
    criptomonedas.forEach( cripto => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);// insertar el HTML
    });
}

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e){
    e.preventDefault();
    //Validar
    const {moneda,criptomoneda} = objBusqueda;
    if (moneda ==='' || criptomoneda ==='') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }
    //COnsultar API con los resultados
    consultarAPI();
}

function mostrarAlerta(msg){
    const existeError = document.querySelector('.error');
    if (!existeError) {//Validando mensaje de error
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('error');
        divMensaje.textContent = msg;
        formulario.appendChild(divMensaje);
        setTimeout(() => {
            divMensaje.remove();
        }, 1000);
    }
}

function consultarAPI(){
    const {moneda, criptomoneda}= objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( cotizacion => {
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        })
}

function mostrarCotizacionHTML(cotizacion){
    limpiarHTML();

    const {PRICE, HIGHDAY,LOWDAY,CHANGEPCT24HOUR,LASTUPDATE} = cotizacion;

    const precio = document.createElement('P');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `El precio mas alto del dia: <span>${HIGHDAY}</span>`;
    
    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `El precio mas bajo del dia: <span>${LOWDAY}</span>`;

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `La variacion en las ultimas 24 hrs es: <span>${CHANGEPCT24HOUR}</span>`;
    
    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Ultima actualizacion: <span>${LASTUPDATE}</span>`;

    console.log(cotizacion);
    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML(){
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}