const password = "123456";

describe('Describimos que hace el test por ejemplo: VALIDAR PASSWORD',() =>{
    test('El password debe tener 6 caracteres', () => {
        expect(password).toHaveLenht(6);
    });

    test('El password no debe estar vacio', () => {
        expect(password).not.toHaveLenht(0);
    })
})