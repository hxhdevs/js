class Citas {
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];

        console.log(this.citas);
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id)//Eliminamos con filter
    }

    editarCita(citaactualizada){
        this.citas = this.citas.map(cita => cita.id === citaactualizada.id ? citaactualizada : cita);//map crea ujn nuevo arreglo reescribiendolo
    }
}

export default Citas;