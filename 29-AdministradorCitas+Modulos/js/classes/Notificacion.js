// export class Notificacion{//cualquiera de las fos maneras es valida
export default class Notificacion{
// class Notificacion{//forma valida solo si la llamamos al final
    constructor({texto, tipo}){
        this.texto = texto
        this.tipo = tipo
        this.mostrar()
    }

    mostrar(){
        //Creamos la notificacion
        const alerta = document.createElement('DIV')
        alerta.classList.add('text-center','w-full','p-3','text-white','my-5','alert','uppercase','font-bold','text-sm')
        //Eliminar duplicado de alertas
        const alertaPrevia = document.querySelector('.alert')
        alertaPrevia?.remove()//forma reciente o moderna llamada optional chainnig
        // if(alertaPrevia){//metodo tradicional con IF
        //     alertaPrevia.remove()
        // }
        //Agregar clase si es de tipo error
        this.tipo === 'error' ? alerta.classList.add('bg-red-500'): alerta.classList.add('bg-green-500')

        //Mensaje de error
        alerta.textContent = this.texto

        //Insertar en el DOM
        formulario.parentElement.insertBefore(alerta, formulario)       

        //Quitar alerta
        setTimeout(() => {
            alerta.remove()
        },1000)
    }
}
// export default Notificacion