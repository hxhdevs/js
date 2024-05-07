const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// contenedor para los resultados
const contenedor = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//generar un objeto con la busqueda
const datosBusqueda = {
    marca :'',
    year :'',
    minimo :'',
    maximo:'',
    puertas :'',
    transmision :'',
    color :'',
}
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    llenarSelect();
});

//Event listener para los select de busqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    console.log(datosBusqueda)
})
year.addEventListener('change', e =>{
    datosBusqueda.year = e.target.value;
    console.log(datosBusqueda)
})
minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;
    console.log(datosBusqueda)
})
maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
    console.log(datosBusqueda)
})
puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = e.target.value;
    console.log(datosBusqueda)
})
transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    console.log(datosBusqueda)
})
color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda)
})

function mostrarAutos(){
    autos.forEach(auto => {

        const {marca,modelo,year,puertas,transmision,precio,color}=auto;
        const autoHTML = document.createElement('p');

        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;
        
        resultado.appendChild(autoHTML);
    })
}

function llenarSelect(){
    for(let i = max; i > min;i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
        console.log(i);
    }
}