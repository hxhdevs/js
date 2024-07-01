import Citas from "../js/classes/Citas";

describe('',() => {
    const citas = new Citas();

    test('Agregar una nueva cita ', () => {
        const citaObj = {
            mascota: 'Hook',
            propietario: 'Elih',
            telefono: '123123123',
            fecha: '27-04-23',
            hora:'02:00',
            sintomas: 'Solo duerme'
        };
        citaObj.id = Date.now();

        citas.agregarCita(citaObj)
    })
    
    //Prueba
    expect(citas).toMatchSnapshot();
})
