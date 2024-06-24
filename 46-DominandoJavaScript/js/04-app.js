// implicing bindings.
// Implicit binding le dira de forma clara a la palabra this donde encontrar sus valores
const usuario = {
    nombre: 'Juan',
    edad: 20,
    informacion() {
        console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`);
        //con .this apuntamos a la informacion del objeto dentro de las llaves
    }, 
    mascota: {
        nombre: 'Hook',
        edad: 1, 
        informacion() {
            console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }
    }//aqui .this apunta a los valores del objeto mascota
}

usuario.informacion();//variable.funcion
usuario.mascota.informacion();//aqui apuntamos a la impresion de informacion con variable.objeto.funcion
// ASKIN: ejemplo de Implicit binding