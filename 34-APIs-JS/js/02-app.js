//Existe esta API llamada Intersection Observer, veamos como utilizarla..


document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver( entries => {
        console.log(entries[0]);

        if(entries[0].isIntersecting) {
            console.log('Ya esta visible...')
        }
    })


    // El Elemento a observar...
    observer.observe(document.querySelector('.premium'));
});

// puede ser util para hacer un scrol infinito 
// en esta caso observa a un elemento de la pagina en cuanto este vivible al usuario se ejecutara 