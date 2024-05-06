const contenedor = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max-10;

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    llenarSelect();
});

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
        // console.log(i);
    }
}