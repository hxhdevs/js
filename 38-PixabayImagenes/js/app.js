
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

const registroPorPagina = 40;
let iterador
window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
};

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === '') {
        // mensaje de error
        mostrarAlerta('Agrega un término de búsqueda');
        return;
    }
    buscarImagenes(terminoBusqueda);
}


// Muestra una alerta de error o correcto
function mostrarAlerta(mensaje) {
    const alerta = document.querySelector('.bg-red-100');
    if(!alerta) {
        const alerta = document.createElement('p');

        alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center" );
    
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
    
        formulario.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function buscarImagenes(termino){
    const key = '44234018-a398908bb2e9097b09ca251a1';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=100`;
    console.log(url);
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado =>{
            totalPaginas = calcularPaginas(resultado.totalHits);
            mostrarImagenes(resultado.hits)
        })
}
//Generador que va a registrar la cantidad de elementos de acuerdo a las paginas
function *crearPaginador(total){//un generador se define con un asterisco
    console.log(total);
    for (let i = 0;i<=total;i++){
        yield i;
    }
}

function calcularPaginas(total){
    return parseInt(Math.ceil(total/registroPorPagina));
}

function mostrarImagenes(imagenes){
    console.log(imagenes);

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }

    //Iterar sobre el arreglo de imagenes y construir el html
    imagenes.forEach( imagen => {

        const { likes, views, previewURL, largeImageURL } = imagen;
        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 mb-4 p-3">
                <div class="bg-white ">
                    <img class="w-full" src=${previewURL} alt={tags} />
                    <div class="p-4">
                        <p class="card-text">${likes} Me Gusta</p>
                        <p class="card-text">${views} Vistas </p>
        
                        <a href=${largeImageURL} 
                        rel="noopener noreferrer" 
                        target="_blank" class="bg-blue-800 w-full p-1 block mt-5 rounded text-center font-bold uppercase hover:bg-blue-500 text-white">Ver Imagen</a>
                    </div>
                </div>
            </div>
            `;
    });
    imprimirPaginador();
}

function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);
    console.log(iterador.next());
}