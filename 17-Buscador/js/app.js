const contenedor = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
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